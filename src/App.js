import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Order from './components/Order'

function App() {
	return (
		<>
			<div className="container">
				<Header />
				<Sidebar />
				<Content />
				<Order />
			</div>
		</>
	)
}

export default App
