
import React from 'react';
import Card from './card';

export default class List extends React.Component {

	render (props) {
		return (
			<div className="card-list">
				<div>{this.props.title}</div>
					{this.props.cards.map(cardText => <Card text={cardText}/>)}
				<form onSubmit={this.props.onSubmit}>
					<input type='text' onChange={this.props.onChange}/>
					<input type='submit'/>
				</form>
			</div>
		);
	}
}

				//<List title='list1' cards={['bla', 'bloo', 'bee']} />
				// <List title='list2' cards={['1bla', '1bloo', '1bee']} />

				// <Card text={cardText}/>
				// <List title='list1' cards={['bla', 'bloo', 'bee']} />
				// <Board title='board1' lists={['list1', 'list2']}