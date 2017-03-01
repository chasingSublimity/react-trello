import React from 'react';
import Card from './card';
import List from './list';

export default class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			cards: []
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChanged(event) {
		this.setState({text: event.target.value});
	}

	onAddSubmit(event) {
		event.preventDefault();
		const cardsArray = this.state.cards.slice();
		cardsArray.push(this.state.text);
		this.setState({cards: cardsArray});
	}

	render(props) {
		return (
			<List 
			title={this.props.listTitles} 
			cards={this.state.cards} 
			onAddInputChanged={this.onAddInputChanged}
			onAddSubmit={this.onAddSubmit}
			/>
		);
	}

}
