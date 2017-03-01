import React from 'react';


export default function Card(props) {
	return (
		<div className="card" key={props.index}>{props.text}</div>
	);
}
