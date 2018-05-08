import React from 'react';
import CalculateScore from '../services/CalculateScore';

export default class Score extends React.Component {
	constructor(){
		super();
		this.state = {
			scales: [],
			score : 0
		};
	}


	componentWillReceiveProps(){
		let scaleInput = this.props.scores.ProcessScales;
		let currentScore = new CalculateScore(scaleInput || []);
		let calculatedScore = currentScore.deriveScore();
		this.setState({
			scales: scaleInput,
			score : calculatedScore
		});
	}


	render(){
		return(
			<div className="sus-score">
				<h2>Score:</h2>
				<h3>{this.state.score}</h3>
				<ul className="scorelist">
					{this.state.scales.map((score, index)=> {
						return <li key={index} className="scorelist-item">
							<p className="scorelist-item--question">{score.scales.context}</p>
							<p className="scorelist-item--score">{score.scales.value}</p>
						</li>;
					})}
				</ul>
			</div>
		);
	}
}

