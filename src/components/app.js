import { Router } from 'preact-router';
import { Provider } from 'react-redux'

import Header from './header';
import store from "../store";

// Code-splitting is automated for `routes` directory
import Part1 from '../routes/part-1';
import Part2 from '../routes/part-2';
import Part3 from '../routes/part-3';
import WastedRenders from '../routes/wasted-renders';

const App = () => (
	<div id="app">
		<Provider store={store}>
			<Header />
			<Router>
				<WastedRenders path="/wasted-renders" />
				<Part1 path="/" />
				<Part2 path="/part-2" />
				<Part3 path="/part-3" />
			</Router>
		</Provider>
	</div>
)

export default App;
