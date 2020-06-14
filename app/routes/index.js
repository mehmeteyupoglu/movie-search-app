import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
        "popularity": 73.223,
        "vote_count": 423,
        "video": false,
        "poster_path": "/kNDFTt8O6g7LhIFo1mwlezTTXme.jpg",
        "id": 652483,
        "adult": false,
        "backdrop_path": "/9OaIWmWI7Ph3jqj235zQIrh5yVd.jpg",
        "original_language": "pt",
        "original_title": "Modo Avião",
        "genre_ids": [
          35,
          10749
        ],
        "title": "Airplane Mode",
        "vote_average": 6.4,
        "overview": "When Ana, an influencer, crashes her car while talking on the phone, she's shipped to her grumpy grandfather's farm -- and forced into a digital detox.",
        "release_date": "2020-01-23"
    };
  }
}