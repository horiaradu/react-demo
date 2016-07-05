import React from 'react';
import ReactDOM from 'react-dom';

import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';

import {fromJS} from 'immutable';
import Items from '../../src/components/Items';

import {expect} from 'chai';

describe('Items', () => {
  it('renders the items', () => {
    const items = fromJS([
      {id: 1, title: 'foo', body: 'bubu'},
      {id: 2, title: 'bar', body: 'fufu'}
    ]);

    const component = renderIntoDocument(
      <Items items={items}/>
    );

    const paragraphs = scryRenderedDOMComponentsWithTag(component, 'p');
    expect(paragraphs.length).to.equal(2);
    expect(paragraphs[0].textContent).to.equal('bubu');
    expect(paragraphs[1].textContent).to.equal('fufu');
  });

  it('renders the more button', () => {
    const component = renderIntoDocument(
      <Items items={fromJS([])}/>
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(1);
    expect(buttons[0].textContent).to.equal('more...');
  });

  it('invokes the callback when the button is clicked', () => {
    let called = false;
    const loadMore = () => called = true

    const component = renderIntoDocument(
      <Items items={fromJS([])} loadMore={loadMore}/>
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);
    expect(called).to.equal(true);
  });

  it('renders as a pure component!!!', () => {
    const mutableItems = [
      fromJS({id: 1, title: 'foo', body: 'bubu'}),
      fromJS({id: 2, title: 'bar', body: 'fufu'})
    ];

    const container = document.createElement('div');
    let component = ReactDOM.render(
      <Items items={mutableItems}/>,
      container
    );

    expect(scryRenderedDOMComponentsWithTag(component, 'p')[0].textContent)
      .to.equal('bubu');

    mutableItems[0] = mutableItems[0].set('body', 'mumu');
    component = ReactDOM.render(
      <Items items={mutableItems}/>,
      container
    );

    expect(scryRenderedDOMComponentsWithTag(component, 'p')[0].textContent)
      .to.equal('bubu');
  });

  it('updates when props change!', () => {
    const items = fromJS([
      {id: 1, title: 'foo', body: 'bubu'},
      {id: 2, title: 'bar', body: 'fufu'}
    ]);

    const container = document.createElement('div');
    let component = ReactDOM.render(
      <Items items={items}/>,
      container
    );

    expect(scryRenderedDOMComponentsWithTag(component, 'p')[0].textContent)
      .to.equal('bubu');

    const newItems = fromJS([
      {id: 1, title: 'foo', body: 'mumu'},
      {id: 2, title: 'bar', body: 'fufu'}
    ]);
    component = ReactDOM.render(
      <Items items={newItems}/>,
      container
    );

    expect(scryRenderedDOMComponentsWithTag(component, 'p')[0].textContent)
      .to.equal('mumu');
  });
});
