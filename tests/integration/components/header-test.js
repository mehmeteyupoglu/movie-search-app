import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside header with a TMBD', async function(assert) {
    await render(hbs`<Header>{{yield}}</Header>`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('');
    assert.dom('.jumbo .tomster').exists();

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
