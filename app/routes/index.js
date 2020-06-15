import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/movies.json');
    
    let { results } = await response.json();

    return results
  }
}
