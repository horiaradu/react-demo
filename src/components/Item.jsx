import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }

  title() {
    return this.props.item.get('title');
  }

  body() {
    return this.props.item.get('body');
  }

  render() {
    return <div className='panel panel-default'>
      <div className='panel-heading'>{this.title()}</div>
      <div className='panel-body'>{this.body()}</div>
    </div>;
  }
}

Item.propTypes = {
  item: React.PropTypes.object.isRequired
};
