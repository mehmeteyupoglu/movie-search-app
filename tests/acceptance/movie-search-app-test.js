import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | movie search app', function(hooks) {
  setupApplicationTest(hooks);

    test('visiting /', async function(assert) {
    await visit('/');
    
    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Movie Search App!');

    assert.dom('.jumbo a.button').hasText('Popular Movies');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/popular-movies');
    
  });

  test('visiting /popular-movies', async function(assert) {
    await visit('/popular-movies');

    assert.equal(currentURL(), '/popular-movies');
    assert.dom('h2').hasText('Popular Movies');

    assert.dom('.jumbo a.button').hasText('Homepage');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/');
  });

  
});
