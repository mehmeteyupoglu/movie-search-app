import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route("popular-movies");
  this.route('movies');
  this.route('movie', { path: '/:movie_id' });  
});
