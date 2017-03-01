
import React from 'react';
import Card from './card';

export default class List extends React.Component {

	render (props) {
		return (
			<div className="card-list">
				<div>{this.props.title}</div>
					{this.props.cards.map((cardText, index) => <Card key={index} text={cardText}/>)}
				<form onSubmit={this.props.onAddSubmit}>
					<input type='text' onChange={this.props.onAddInputChanged}/>
					<input type='submit'/>
				</form>
			</div>
		);
	}
}
