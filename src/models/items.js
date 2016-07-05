import {List, Range, Map} from 'immutable';
import Faker from 'faker';

class Items {
  constructor() {
    this.items = List();
  }

  loadMore() {
    let newItems = Range(0, 10)
      .map(() => this._generateItem());

    this.items = this.items.push(...newItems);
  }

  getItems() {
    return this.items;
  }

  save(updated) {
    this.items = this.items.map(
      item => item.get('id') === updated.get('id') ? updated : item
    );
  }

  _generateItem(id) {
    return Map({
      id: Faker.random.uuid(),
      title: Faker.company.companyName(),
      body: Faker.random.words(10)
    });
  }
}

const ITEMS = new Items();
export default ITEMS;
