import React from 'react';
import ReactDOM from 'react-dom';
import Scale from './components/Scale';

export default class ReactSUS extends React.Component {
	render(){
		return(
			<Scale/>
		);
	}
}

ReactDOM.render(
	<ReactSUS/>, document.getElementById('app')
);