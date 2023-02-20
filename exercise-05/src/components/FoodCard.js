import React from 'react'

import '../App.css';
import VoteButton from './VoteButton';
import UnvoteButton from './UnvoteButton';

class FoodCard extends React.Component {
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
					<VoteButton />
					<div className='vote-result'>MIN</div>
					<UnvoteButton />
				</div>
			</section>
		);
	}
}

export default FoodCard;
