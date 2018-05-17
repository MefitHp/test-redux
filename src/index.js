import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import { loadCourses } from './redux/actions/courseActions'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore();
store.dispatch(loadCourses());

const WithRoute = () => (
	<Router>
		<App />
	</Router>
)

const ReduxProvider = () => (
	<Provider store={store}>
		<WithRoute />
	</Provider>
)
ReactDOM.render(<ReduxProvider />, document.getElementById('root'));
registerServiceWorker();
