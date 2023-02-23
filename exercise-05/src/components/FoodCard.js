import React from 'react'

import '../App.css';
import VoteButton from './VoteButton';

class FoodCard extends React.Component {
	constructor() {
		super();
		this.state = { vote_count: 0 };
	}
	vote_callback = () => {
		if (this.state.vote_count < 10)
			this.setState({ vote_count: this.state.vote_count+1 });
		else alert("You cannot vote anymore!");
	}
	unvote_callback = () => {
		if (this.state.vote_count > 0)
			this.setState({ vote_count: this.state.vote_count-1 });
		else alert("You cannot unvote anymore!");
	}
	show_vote_result = () => {
		if (this.state.vote_count === 0)
			return "MIN";
		if (this.state.vote_count === 10)
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
					<VoteButton content='Click to vote' parentCallback={this.vote_callback} />
					<div className='vote-result'>{this.show_vote_result()}</div>
					<VoteButton content='Click to unvote' parentCallback={this.unvote_callback} />
				</div>
			</section>
		);
	}
}

export default FoodCard;
