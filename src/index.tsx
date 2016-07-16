import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import StoreRegistrations from './stores/StoreRegistrations';
import App from './containers/App';
import Index from './components/Index';
import SubRoute from './components/SubRoute';
import { Router, Route, browserHistory, IndexRedirect  } from 'react-router';

const initialState = {};

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={App}>
			<IndexRedirect to="index" />
			<Route path="index" store={StoreRegistrations.AppyStores(['Model', 'Other'])} component={Index}/>
			<Route path="sub" component={SubRoute}/>
		</Route>
	</Router>,
	document.getElementById('app'))