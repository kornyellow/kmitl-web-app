import React from 'react'

import '../App.css';

class FoodCard extends React.Component {
	constructor() {
		super();
		this.state = { vote_count: 0 };
	}
	vote = () => {
		if (this.state.vote_count < 10)
			this.setState({ vote_count: this.state.vote_count+1 });
	}
	unvote = () => {
		if (this.state.vote_count > 0)
			this.setState({ vote_count: this.state.vote_count-1 });
	}
	show_vote_result = () => {
		if (this.state.vote_count == 0)
			return "MIN";
		if (this.state.vote_count == 10)
			return "MAX";
		return this.state.vote_count;
	}
	render() {
		return (
			<section className='card'>
				<div className='card-body'>
					<div className='card-content'>
						<h2>{this.props.header}</h2>
						<h3>{this.props.subheader}</h3>
						<p>{this.props.detail}</p>
					</div>
					<div className='card-image'>
						<img alt={this.props.imgalt} src={this.props.imgsrc} />
					</div>
				</div>
				<div className='card-footer'>
					<button className='button-vote' onClick={this.vote}>Click to vote</button>
					<div className='vote-result'>{this.show_vote_result()}</div>
					<button className='button-unvote' onClick={this.unvote}>Click to unvote</button>
				</div>
			</section>
		);
	}
}

export default FoodCard;
