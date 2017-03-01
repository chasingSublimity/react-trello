import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';
import List from '../js/components/list';

describe('Card component', function() {
	it('Renders the card',  function() {
		const index = 0;
		const text = 'Example text';

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card index={index} text={text} />);
		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.key.should.equal(index.toString());
		result.props.className.should.equal('card');
		result.props.children.should.equal(text);
	});
});