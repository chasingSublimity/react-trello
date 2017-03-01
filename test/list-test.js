import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';
import List from '../js/components/list';

describe('List component', function() {
	it('Renders title and list of card components',  function() {
		const title = 'list 1';
		const card1 = {
			text: 'Example text 1'
		};
		const card2 = {
			text: 'Example text 2'
		};
		const card3 = {
			text: 'Example text 3'
		};

		// test that list is rendered
		const renderer = TestUtils.createRenderer();
		renderer.render(<List title={title} cards={[card1.text, card2.text, card3.text]} />);
		const result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.className.should.equal('card-list');
		result.props.children.length.should.equal(3);
		const listTitleDiv = result.props.children[0];
		listTitleDiv.type.should.equal('div');
		listTitleDiv.props.children.should.equal(title);

		// test that cards are rendered
		const cards = result.props.children[1];
		cards.length.should.equal(3);
		cards[0].props.text.should.equal(card1.text);
		// how do you test for methods?
	});
});
