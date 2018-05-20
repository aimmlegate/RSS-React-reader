import React from 'react';
import FeedContainer from '../containers/FeedContainer';
import cn from 'classnames';

export default class Feeds extends React.Component {
  changeTab = (e) => {
    e.preventDefault();
    const { id } = e.target;
    this.props.setActiveTab(id);
  }
  render() {
    const { feeds } = this.props;
    const feedsIds = Object.keys(feeds);
    const { activeTab } = this.props;
    return (
      <div className='row'>
        <div className='col-2'>
          <div className="nav flex-column nav-pills">
            {
              feedsIds.map((id) => {
                const tabControlClasses = cn({
                  'nav-link': true,
                  active: (activeTab === id),
                  show: (activeTab === id),
                });
                const { name } = feeds[id];
                return (
                  <a className={tabControlClasses} href='#' id={id} key={id} onClick={this.changeTab}>{name}</a>
                );
              })
            }
          </div>
        </div>
        <div className='col-9'>
          <div className="tab-content">
            {
              feedsIds.map((id) => {
                const { name, description } = feeds[id];
                const tabItemsClasses = cn({
                  'tab-pane': true,
                  fade: true,
                  active: (activeTab === id),
                  show: (activeTab === id),
                });
                return (
                  <div key={id} className={tabItemsClasses}>
                    <FeedContainer name={name} description={description} id={id}></FeedContainer>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>

    );
  }
}
