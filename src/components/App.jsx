import React from 'react';
import Items from './Items';
import ITEMS from '../models/items';

export default class App extends React.Component {
  constructor() {
    super();

    ITEMS.loadMore();

    this.state = {
      items: ITEMS.getItems()
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(updated) {
    ITEMS.save(updated);

    this.setState({
      items: ITEMS.getItems()
    });
  }

  items() {
    return this.state.items;
  }

  render() {
    return <div className='container'>
      <h1>React Demo app</h1>
      <Items items={this.items()} onUpdate={this.onUpdate} />
    </div>;
  }
}
