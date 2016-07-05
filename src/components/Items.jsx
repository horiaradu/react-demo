import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './Item';

export default class Items extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }

  items() {
    return this.props.items;
  }
  render() {
    return <div>
      {this.items().map(
        item =>
          <Item
            item={item}
            onUpdate={this.props.onUpdate}
            key={item.get('id')}
          />
      )}

      <div className='pull-right'>
        <button className='btn btn-primary' onClick={this.props.loadMore}>
          more...
        </button>
      </div>
    </div>;
  }
}

Items.propTypes = {
  items: React.PropTypes.object.isRequired,
  onUpdate: React.PropTypes.func.isRequired,
  loadMore: React.PropTypes.func.isRequired
};
