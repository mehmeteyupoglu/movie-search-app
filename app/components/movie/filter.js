import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { search, query } = this.args;

    if (query) {
      search = search.filter(search => search.title.includes(query));
    }

    return search;
  }
}