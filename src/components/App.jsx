import React from 'react';
import {fromJS} from 'immutable';
import Items from './Items';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: fromJS([
        {id: 1, title: 'First', body: 'bla'},
        {id: 2, title: 'Second', body: 'bla'}
      ])
    };

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(updated) {
    this.setState({
      items: this.items().map(item => item.get('id') === updated.get('id') ? updated : item)
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
