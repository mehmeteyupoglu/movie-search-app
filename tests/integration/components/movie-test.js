import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movie', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property', async function(assert) {

    assert.dom('article').hasClass('rental');
    assert.dom('article h3').hasText('El Camino: A Breaking Bad Movie');
    assert.dom('article .detail.owner').includesText('El Camino: A Breaking Bad Movie');
    assert.dom('article .detail.type').includesText('36.21');
    assert.dom('article .detail.location').includesText('2019-10-11');
    assert.dom('article .detail.bedrooms').includesText('2550');
  });
});
