import React from 'react';
import cn from 'classnames';
import { isURL } from 'validator';
import { normalizeUrl } from '../logic/helpers';

export default class Form extends React.Component {
  newUrl = (e) => {
    const inputValue = normalizeUrl(e.target.value);
    const addedUrls = new Set(Object.values(this.props.urls));

    if (!isURL(inputValue)) {
      this.props.setFormStatus({ message: 'wrong url', status: false });
    } else if (addedUrls.has(inputValue)) {
      this.props.setFormStatus({ message: 'already exist', status: false });
    } else {
      this.props.setFormStatus({ message: 'looks good', status: true });
    }
    this.props.currentFormInput(inputValue);
  }

  addFeed = (e) => {
    e.preventDefault();
    const formUrl = this.props.inputText;
    const { status } = this.props.formStatus;
    if (status) {
      this.props.addFeeds(formUrl);
    }
  }

  renderFormMessage() {
    const validClass = cn({
      'invalid-feedback': !this.props.formStatus.status,
      'valid-feedback': this.props.formStatus.status,
    });
    return (
      <div className={validClass}>
        {this.props.formStatus.message}
      </div>
    );
  }
  render() {
    const { status } = this.props.formStatus;
    const isEmpty = (this.props.inputText.length === 0);
    const inputClasses = cn({
      'form-control': true,
      'is-invalid': !this.props.formStatus.status && !isEmpty,
      'is-valid': this.props.formStatus.status && !isEmpty,
    });
    const submitClasses = cn({
      btn: true,
      'btn-outline-secondary': true,
      disabled: !status,
    });
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">RSS Reader</h1>
          <p className="lead">RSS is a type of web feed which allows users to access updates to online content in a standardized,
              computer-readable format.
              The news aggregator will automatically check the RSS feed for new content. </p>
          <div className="row">
            <div className="col-12">
              <form id="feed-form" className="input-group mb-3" onSubmit={this.addFeed}>
                <div className="input-group-prepend">
                  <label htmlFor="basic-url" className="input-group-text">URL to feed</label>
                </div>
                <input id="feed-input" type="text" className={inputClasses}
                  value={this.props.inputText} name="feedUrl" aria-describedby="basic-addon3" onChange={this.newUrl} />
                <div className="input-group-append">
                  <button className={submitClasses} type="submit">Submit</button>
                </div>
                {this.renderFormMessage()}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
