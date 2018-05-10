import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeDisplay } from './components/home/HomeDisplay'
import CoursesPage from './components/courses/CoursesPage'

export const Routes = () =>(
		<Switch>
			<Route exact path="/" component={HomeDisplay} />
			<Route path="/courses" component={CoursesPage} />
		</Switch>
	)