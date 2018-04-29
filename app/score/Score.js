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
	render(){
		return(
			<div className="sus-score">
				<h2>Score</h2>
				<ul className="scorelist">
					{mockScore.map((score, index)=> {
						return <li key={index} className="scorelist-item">
							<p className="scorelist-item--question">{score.question} ({score.id})</p>
							<p className="scorelist-item--score">{score.score}</p>
						</li>;
					})}
				</ul>
			</div>
		);
	}
}