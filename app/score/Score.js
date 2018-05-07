import React from 'react';

const mockScore = [
	{ id: 1, question: 'Frequency', score: '2' },
	{ id: 2, question: 'Complexity', score: '1' },
	{ id: 3, question: 'Ease of Use', score: '3' },
	{ id: 4, question: 'Support', score: '2' },
	{ id: 5, question: 'Integration', score: '4' },
	{ id: 6, question: 'Consistency', score: '2' },
	{ id: 7, question: 'Learnability', score: '1' },
	{ id: 8, question: 'Encumbrance', score: '3' },
	{ id: 9, question: 'Confidence', score: '5' },
	{ id: 10, question: 'Uptake', score: '4' }
];

export default class Score extends React.Component {
	constructor(){
		super();
		this.state = {
			scales: []
		};
	}

	componentWillReceiveProps(){
		let scaleInput = this.props.scores.ProcessScales;
		console.log(scaleInput);
		this.setState({ scales: scaleInput });
	}


	render(){
		return(
			<div className="sus-score">
				<h2>Score</h2>
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