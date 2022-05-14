import { Router } from 'preact-router';
import { Provider } from 'react-redux'

import Header from './header';
import store from "../store";

// Code-splitting is automated for `routes` directory
import Example1 from '../routes/example-1';
import Example2 from '../routes/example-2';
import Example3 from '../routes/example-3';
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
				<Example1 path="/example-1" />
				<Example2 path="/example-2" />
				<Example3 path="/example-3" />
				<ReduxExample path="/redux" />
			</Router>
		</Provider>
	</div>
)

export default App;
