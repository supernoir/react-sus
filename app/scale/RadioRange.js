import React from 'react';
import Radio from './Radio';

export default class RadioRange extends React.Component{
	extendRange (range) {
		let firstItem = range[0];
		let lastItem = range[1];

		const tempArray = [];
		for (let i = firstItem; i <= lastItem; i++){
			tempArray.push(i);
		}
		return tempArray;
	}

	displayRadioRange () {
		const extendedRange = this.extendRange(this.props.range);
		return extendedRange.map((val, index) => <Radio key={index} id={index} label={val} type={'radio'}/>);
	};

	render(){
		return (
			<div className="sus-scale-scaleitem range">
				<p>{this.props.label}</p>
				{this.displayRadioRange()}
			</div>
		);
	}
}