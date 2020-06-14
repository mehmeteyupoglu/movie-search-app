import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movie/image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function(assert) {
    await render(hbs`
    <Rental::Image
    src="/assets/images/tmbd.png"
    alt="TMDB"
    />
    `);

  assert.dom('.image').exists();
  assert.dom('.image img').hasAttribute('src', '/assets/images/tmbd.png');
  assert.dom('.image img').hasAttribute('alt', 'TMDB');
  });
});
