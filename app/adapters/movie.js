import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class MovieAdapter extends JSONAPIAdapter {
    host = "https://api.themoviedb.org/3"

    pathForType() {
        return "movie/popular?api_key=f21d4318a697d4af5b29235e1de3ddb1&language=en-US&page=2"
    }
}
