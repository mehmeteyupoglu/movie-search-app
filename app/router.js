import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route("popular-movies");
  this.route('movie', { path: '/popular-movies/:movie_id' });
  this.route('movies');
});
