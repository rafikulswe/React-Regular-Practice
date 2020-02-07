import React from 'react';
import './App.css';
import SecondCounter from "./Components/SecondCounter";
import MainConcept from "./Components/MainConcept";

function App() {
	return (
		<div className="App">
			<p>
				<SecondCounter />
				<MainConcept />
			</p>
		</div>
	);
}

export default App;
