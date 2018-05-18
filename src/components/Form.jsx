import React from 'react';
import cn from 'classnames';
import _ from 'lodash';
import { isURL } from 'validator';

export default class Form extends React.Component {
  newUrl = (e) => {
    const inputValue = e.target.value;
    if (isURL(inputValue)) {
      this.props.setFormStatus({ message: 'looks good', status: true });
    } else {
      this.props.setFormStatus({ message: 'wrong url', status: false });
    }
    this.props.currentFormInput(inputValue);
  }

  addFeed = (e) => {
    e.preventDefault();
    const formUrl = this.props.inputText;
    this.props.addFeeds(formUrl);
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
    const isEmpty = (this.props.inputText.length === 0);
    const inputClasses = cn({
      'form-control': true,
      'is-invalid': !this.props.formStatus.status && !isEmpty,
      'is-valid': this.props.formStatus.status && !isEmpty,
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
                <input id="feed-input" type="text" className={inputClasses} name="feedUrl" aria-describedby="basic-addon3" onChange={this.newUrl} />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit">Submit</button>
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
