import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { render, click } from '@ember/test-helpers';

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

  test('clicking on the component toggles its size', async function(assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/tmbd.png"
        alt="TMDB"
      />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large')
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});
