import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const WithRouter = () => (
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	);


ReactDOM.render(<WithRouter />, document.getElementById('root'));

registerServiceWorker();
