import React from 'react';
import ReactDOM from 'react-dom';
import Scale from './scale/Scale';
import Score from './score/Score';

export default class ReactSUS extends React.Component {
	render(){
		return(
			<div className="sus">
				<Scale/>
				<Score/>
			</div>
		);
	}
}

ReactDOM.render(
	<ReactSUS/>, document.getElementById('app')
);