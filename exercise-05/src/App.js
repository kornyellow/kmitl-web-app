import React from 'react';

import './App.css';
import FoodCard from './components/FoodCard';

class App extends React.Component {
	render() {
		const foodcard_data = [
			{ header: 'อาหารคาว', subheader: 'ข้าวผัด', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lacus eget risus faucibus pellentesque a in mauris. Donec elit ex, efficitur sed tellus non, rutrum ullamcorper arcu. Sed pulvinar nisi et hendrerit pretium. Aliquam sed nibh eleifend, egestas erat sit amet, hendrerit justo. Praesent accumsan mattis nibh, vitae fermentum eros suscipit a. Sed diam tortor, porta vel sem nec, porttitor efficitur massa. Cras vehicula tempus aliquet. Nullam pellentesque ornare justo eget luctus. Quisque lacus sem, vestibulum ut dui eget, mollis molestie enim. Aenean consequat, tellus a venenatis auctor, lectus massa efficitur ipsum, sit amet aliquam ipsum turpis sit amet lectus. Vivamus ac nulla ultricies tellus luctus scelerisque sit amet et metus. Phasellus eget arcu dictum, suscipit metus a, auctor quam.', imgalt: 'รูปข้าวผัด', imgsrc: 'https://img-global.cpcdn.com/recipes/725b05b137e5b4c3/1200x630cq70/photo.jpg' },
			{ header: 'อาหารหวาน', subheader: 'บัวลอย', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lacus eget risus faucibus pellentesque a in mauris. Donec elit ex, efficitur sed tellus non, rutrum ullamcorper arcu. Sed pulvinar nisi et hendrerit pretium. Aliquam sed nibh eleifend, egestas erat sit amet, hendrerit justo. Praesent accumsan mattis nibh, vitae fermentum eros suscipit a. Sed diam tortor, porta vel sem nec, porttitor efficitur massa. Cras vehicula tempus aliquet. Nullam pellentesque ornare justo eget luctus. Quisque lacus sem, vestibulum ut dui eget, mollis molestie enim. Aenean consequat, tellus a venenatis auctor, lectus massa efficitur ipsum, sit amet aliquam ipsum turpis sit amet lectus. Vivamus ac nulla ultricies tellus luctus scelerisque sit amet et metus. Phasellus eget arcu dictum, suscipit metus a, auctor quam.', imgalt: 'รูปบัวลอย', imgsrc: 'https://img.kapook.com/u/2022/wanwanat/1079595941.jpg' },
		];

		return (
			<div className='app'>
				<h1>โหวตอาหาร</h1>
				{ foodcard_data.map (data => (
					<FoodCard
						header={data.header}
						subheader={data.subheader}
						detail={data.detail}
						imgalt={data.imgalt}
						imgsrc={data.imgsrc}
					/>
				))}
			</div>
		);
	}
}

export default App;
