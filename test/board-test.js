import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';


import Board from '../js/components/board';
import ListContainer from '../js/components/list-container';
import List from '../js/components/list';
import Card from '../js/components/card';



describe('Board component', function() {
	it('Renders title and list container', function() {
		const boardTitle = 'board 1';
		const listTitle = 'list 1';

		const renderer = TestUtils.createRenderer();
		renderer.render(<Board title={boardTitle} lists={listTitle}/>);
		const result = renderer.getRenderOutput();

		// test that the board was rendered
		result.type.should.equal('div');
		result.props.className.should.equal('board');
		const titleDiv = result.props.children[0];
		titleDiv.type.should.equal('h1');
		titleDiv.props.children.should.equal(boardTitle);

		// test that the list container was rendered
		const listContainer = result.props.children[1];
		listContainer.props.listTitles.should.equal(listTitle);
	});	
});