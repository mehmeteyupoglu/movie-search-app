import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f21d4318a697d4af5b29235e1de3ddb1&language=en-US&page=3');
    let parsed = await response.json();
    return parsed;
  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=f21d4318a697d4af5b29235e1de3ddb1&language=en-US&page=1
// let response = await fetch('/api/movies.json');