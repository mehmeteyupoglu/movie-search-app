'use strict';

define("movie-search-app/tests/acceptance/movie-search-app-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | movie search app', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
      assert.dom('h2').hasText('Welcome to Movie Search App!');
      assert.dom('.jumbo a.button').hasText('Popular Movies');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/popular-movies');
    });
    (0, _qunit.test)('visiting /popular-movies', async function (assert) {
      await (0, _testHelpers.visit)('/popular-movies');
      assert.equal((0, _testHelpers.currentURL)(), '/popular-movies');
      assert.dom('h2').hasText('Popular Movies');
      assert.dom('.jumbo a.button').hasText('Homepage');
      await (0, _testHelpers.click)('.jumbo a.button');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("movie-search-app/tests/test-helper", ["movie-search-app/app", "movie-search-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
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
