import React from 'react'

import '../App.css';

class VoteButton extends React.Component {
	onTrigger = () => {
		this.props.parentCallback();
	}
	render() {
		return (
			<button className='button-vote' onClick={this.onTrigger}>{this.props.content}</button>
		);
	}
}

export default VoteButton;
