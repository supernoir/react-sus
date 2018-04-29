import React from 'react';
import RadioRange from './RadioRange';
import * as config from '../config/susconfig.json';

export default class Scale extends React.Component {
	render(){
		return(
			<form>
				<div className="sus-scale-container">
					{config.scale.map((item, index)=> {
						return (<div key={index} className="sus-scale-scaleitem">
							<RadioRange range={config.range} label={item.label}/>
						</div>
						);
					})
					}
				</div>
				<button type="submit">Submit Survey</button>
			</form>
		);
	}
}