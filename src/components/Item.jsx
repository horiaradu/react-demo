import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.onBodyChange = this.onBodyChange.bind(this);
  }

  title() {
    return this.props.item.get('title');
  }

  body() {
    return this.props.item.get('body');
  }

  onBodyChange(event) {
    let body = event.target.value;
    let item = this.props.item.set('body', body);
    this.props.onUpdate(item);
  }

  render() {
    return <div className='panel panel-default'>
      <div className='panel-heading'>{this.title()}</div>
      <div className='panel-body'>{this.body()}</div>
      <div className='input-group'>
        <textarea
          rows="3"
          placeholder="body"
          required
          value={this.body()}
          onChange={this.onBodyChange}>
        </textarea>
      </div>
    </div>;
  }
}

Item.propTypes = {
  item: React.PropTypes.object.isRequired,
  onUpdate: React.PropTypes.func.isRequired
};
