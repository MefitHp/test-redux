import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import { loadCourses } from './redux/actions/courseActions'


const store = configureStore();
store.dispatch(loadCourses());

const WithRoute = () => (
	<Router>
		<App />
	</Router>
)

const WithRedux = () => (
	<Provider store={store}>
		<WithRoute />
	</Provider>
)
ReactDOM.render(<WithRedux />, document.getElementById('root'));
registerServiceWorker();
