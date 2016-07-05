import React from 'react';

export default class Items extends React.Component {
  items() {
    return this.props.items;
  }
  render() {
    return <div>
      {this.items().map(
        item => <div className='panel panel-default' key={item.get('id')}>
          <div className='panel-heading'>{item.get('title')}</div>
          <div className='panel-body'>{item.get('body')}</div>
        </div>
      )}
    </div>;
  }
}

Items.propTypes = {
  items: React.PropTypes.object.isRequried
};
