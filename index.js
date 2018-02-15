import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Impressum from './components/Impressum';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/about" component={App} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />
					<Route path="/impressum" component={Impressum} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();