import React from 'react';
import './App.css';
// import SecondCounter from "./Components/SecondCounter";
import MainConcept from "./Components/MainConcept";
import Clock from "./Components/Clock";
import HandlingEvent from "./Components/HandlingEvent";


function App() {
	
	return (
		<div className="App">
			<p>
				{/* <SecondCounter /> */}
				<Clock date={new Date()}/>
				<MainConcept />
				<HandlingEvent />
			</p>
		</div>
	);
}

export default App;
