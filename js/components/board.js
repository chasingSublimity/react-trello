
import React from 'react';
import Card from './card';
import List from './list';
import ListContainer from './list-container';

export default class Board extends React.Component {

	render (props) {
		return (
			<div className="board">
				<h1>{this.props.title}</h1>
				<ListContainer listTitles={this.props.lists}/>
			</div>
		);
	}
}