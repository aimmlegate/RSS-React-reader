import React from 'react';
import cn from 'classnames';

export default class Alert extends React.Component {

  close = () => {
    this.props.alertClose();
  }

  render() {
    const { show, message, err } = this.props.alertStatus;
    const alertClasses = cn({
      alert: true,
      'alert-primary': !err,
      'alert-danger': err,
    });
    if (show) {
      return (
        <div className={alertClasses} role="alert">
          {message}
          <button type="button" className="close" aria-label="Close" onClick={this.close}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
      );
    }
    return null;
  }
}
