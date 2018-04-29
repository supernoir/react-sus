import React from 'react';

export default class Radio extends React.Component {
	render(){
		return(
			<label>
				<input type="radio" key={this.props.id}/>
				{this.props.label}
			</label>
		);
	}
};