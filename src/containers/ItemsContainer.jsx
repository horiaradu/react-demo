import React from 'react';
import Items from '../components/items';
import ITEMS from '../models/items';

export default class ItemsContainer extends React.Component {
  constructor() {
    super();

    ITEMS.loadMore();
    this.state = {
      items: ITEMS.getItems()
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  items() {
    return this.state.items;
  }

  onUpdate(updated) {
    ITEMS.save(updated);

    this.setState({
      items: ITEMS.getItems()
    });
  }

  render() {
    return <Items items={this.items()} onUpdate={this.onUpdate}/>;
  }
}
