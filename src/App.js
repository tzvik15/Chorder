import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './components/start/Start';
import Learn from './components/learn/Learn';
import Play from './components/play/Play';

function App() {
	return (
		<Router>
			<Route exact path ="/Chorder" component={Start} />
			<Route exact path="/" component={Start} />
			<Route exact path="/learn" component={Learn} />
			<Route exact path="/play" component={Play} />
		</Router>
	);
}

export default App;

