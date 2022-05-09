import { Router } from 'preact-router';
import { Provider } from 'react-redux'

import Header from './header';
import store from "../store";

// Code-splitting is automated for `routes` directory
import Part1 from '../routes/part-1';
import Part2 from '../routes/part-2';
import Part3 from '../routes/part-3';
import WastedRenders from '../routes/wasted-renders';
import ReduxExample from '../routes/redux';
import WhyReact from '../routes/why-react';

const App = () => (
	<div id="app">
		<Provider store={store}>
			<Header />
			<Router>
				<WhyReact path="/" />
				<WastedRenders path="/wasted-renders" />
				<Part1 path="/part-1" />
				<Part2 path="/part-2" />
				<Part3 path="/part-3" />
				<ReduxExample path="/redux" />
			</Router>
		</Provider>
	</div>
)

export default App;
