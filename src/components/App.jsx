import React from 'react';
import ItemsContainer from '../containers/ItemsContainer';

export default class App extends React.Component {
  render() {
    return <div className='container'>
      <h1>React Demo app</h1>
      <ItemsContainer />
    </div>;
  }
}
