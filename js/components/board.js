
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

// lists={['list 1', 'list 2']}



				//<List title='list1' cards={['bla', 'bloo', 'bee']} />
				// <List title='list2' cards={['1bla', '1bloo', '1bee']} />

				// <Card text={cardText}/>
				// <List title='list1' cards={['bla', 'bloo', 'bee']} />
				// <Board title='board1' lists={['list1', 'list2']}

			/*	<div className="board">
					<h1>{this.props.title}</h1>
					{this.props.lists.map(listTitle => 
						<List title={listTitle} onAddSubmit={this.onAddSubmit} 
						onAddInputChanged={this.onAddInputChanged} 
						cards={['bla', 'bloo', 'bee']}/>)}
				</div> */
