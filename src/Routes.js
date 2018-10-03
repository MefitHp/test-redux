import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeDisplay } from './components/home/HomeDisplay'
import CoursesPage from './components/courses/CoursesPage'
import ManageCoursesPage from './components/courses/ManageCoursePage'


export const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomeDisplay} />
		<Route path="/courses" component={CoursesPage} />
		<Route path="/course" component={ManageCoursesPage} />
		<Route path="/course/:id" component={ManageCoursesPage} />
	</Switch>
)