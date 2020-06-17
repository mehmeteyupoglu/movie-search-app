'use strict';

define("movie-search-app/tests/acceptance/movie-search-app-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | movie search app', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('Movie Search App');
      assert.dom('h2').hasText('Welcome to Movie Search App!');
      assert.dom('.jumbo a.button').hasText('Popular Movies');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/popular-movies');
    });
    (0, _qunit.test)('visiting /popular-movies', async function (assert) {
      await (0, _testHelpers.visit)('/popular-movies');
      assert.equal((0, _testHelpers.currentURL)(), '/popular-movies');
      assert.dom('nav').exists();
      assert.dom('h1').hasText('Movie Search App');
      assert.dom('h2').hasText('Popular Movies');
      assert.dom('.jumbo a.button').hasText('Homepage');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
    (0, _qunit.test)('navigating using the nav-bar', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('nav').exists();
      assert.dom('nav a.menu-index').hasText('Movie Search App');
      assert.dom('nav a.menu-about').hasText('Popular Movies');
      await (0, _testHelpers.click)('nav a.menu-about');
      assert.equal((0, _testHelpers.currentURL)(), '/popular-movies');
      await (0, _testHelpers.click)('nav a.menu-index');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("movie-search-app/tests/integration/components/header-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the content inside header with a TMBD', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Header>Hello World</Header>
      */
      {
        id: "f/IQ8VIO",
        block: "{\"symbols\":[],\"statements\":[[8,\"header\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Hello World\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom('.jumbo').exists();
      assert.dom('.jumbo').hasText('Hello World');
      assert.dom('.jumbo .tomster').exists();
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("movie-search-app/tests/integration/components/movie-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | movie', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders information about a movie', async function (assert) {
      this.setProperties({
        movie: {
          "popularity": 301.678,
          "vote_count": 3713,
          "video": false,
          "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          "id": 419704,
          "adult": false,
          "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
          "original_language": "en",
          "original_title": "Ad Astra",
          "genre_ids": [18, 878],
          "title": "Ad Astra",
          "vote_average": 6,
          "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
          "release_date": "2019-09-17"
        }
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Movie @movie={{this.movie}} />
      */
      {
        id: "FRVTAq2r",
        block: "{\"symbols\":[],\"statements\":[[8,\"movie\",[],[[\"@movie\"],[[32,0,[\"movie\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom('article').hasClass('rental');
      assert.dom('article h3').hasText('Ad Astra');
      assert.dom('article .detail.owner').includesText('Ad Astra');
      assert.dom('article .detail.type').includesText('301.678');
      assert.dom('article .detail.location').includesText('2019-09-17');
      assert.dom('article .detail.bedrooms').includesText('3713');
      assert.dom('article .image').exists();
    });
  });
});
define("movie-search-app/tests/integration/components/movie/image-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | movie/image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders the given image', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <Rental::Image
          src="/assets/images/tmbd.png"
          alt="TMDB"
          />
          
      */
      {
        id: "0ZwZbOSR",
        block: "{\"symbols\":[],\"statements\":[[2,\"\\n    \"],[8,\"rental/image\",[[24,\"src\",\"/assets/images/tmbd.png\"],[24,\"alt\",\"TMDB\"]],[[],[]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom('.image').exists();
      assert.dom('.image img').hasAttribute('src', '/assets/images/tmbd.png');
      assert.dom('.image img').hasAttribute('alt', 'TMDB');
    });
    (0, _qunit.test)('clicking on the component toggles its size', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Rental::Image
              src="/assets/tmbd.png"
              alt="TMDB"
            />
          
      */
      {
        id: "/1I4DI3O",
        block: "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"rental/image\",[[24,\"src\",\"/assets/tmbd.png\"],[24,\"alt\",\"TMDB\"]],[[],[]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.dom('button.image').exists();
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
      await (0, _testHelpers.click)('button.image');
      assert.dom('.image').hasClass('large');
      assert.dom('.image small').hasText('View Smaller');
      await (0, _testHelpers.click)('button.image');
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
    });
  });
});
define("movie-search-app/tests/test-helper", ["movie-search-app/app", "movie-search-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("movie-search-app/tests/unit/adapters/movie-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | movie', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:movie');
      assert.ok(adapter);
    });
  });
});
define("movie-search-app/tests/unit/models/movie-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | movie', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('movie', {});
      assert.ok(model);
    });
  });
});
define("movie-search-app/tests/unit/routes/movies-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | movies', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:movies');
      assert.ok(route);
    });
  });
});
define('movie-search-app/config/environment', [], function() {
  var prefix = 'movie-search-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('movie-search-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
