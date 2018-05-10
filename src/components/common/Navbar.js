import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
	<nav>
		<Link to="/">Home</Link>
		{ " | " }
		<Link to="/courses">Courses</Link>
		{ " | " }
	</nav>
	);