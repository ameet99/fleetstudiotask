import { useState } from 'react';
import AppHeader from '../components/appHeader';
import { allColors } from './data.js';
import '../App.css';

const Home = () => {
	const [colorName, setColorName] = useState('')
	const [searchData, setSearchData] = useState(allColors)

	const handleFilterData = (value) => {
		setColorName(value)
		const data = allColors.filter((obj) => obj.name.toLowerCase().includes(value.toLowerCase()))
		setSearchData(data);
	}

	return (
		<div className='App'>
			<AppHeader />
			<div className='content'>
				<input
					type="text"
					placeholder="Example: Red"
					value={colorName}
					onChange={(e) => handleFilterData(e.target.value)}
				/>
				<div className='card-container'>
					{searchData.map((item, index) => (
						<div className="card" key={`list-${index}`} style={{ backgroundColor: `#${item.hex}` }}>
							<p style={{ color: item.name.toLowerCase().includes('whi') ? 'black' : 'white', fontWeight: 'bold' }}>#{item.hex}</p>
							<p style={{ color: item.name.toLowerCase().includes('whi') ? 'black' : 'white' }}>{item.name}</p>

						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
