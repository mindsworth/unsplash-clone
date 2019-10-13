import React from 'react'
import SearchInput from '../components/SearchInput'
import PhotoList from '../components/PhotoList'

const App = () => {
	return (
		<div className="app-container">
			<header className="header">
				<SearchInput />
			</header>
			<PhotoList />
		</div>
	)
}

export default App
