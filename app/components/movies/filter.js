import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { movies, query } = this.args;

    if (query) {
      movies = movies.filter(movie => movie.title.includes(query));
    }

    return movies;
  }
}