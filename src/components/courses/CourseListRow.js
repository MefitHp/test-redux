import React from 'react'
import { Link } from 'react-router-dom'

const CourseListRow = ({ course }) => (
    <tr>
        <td><a href={course.watchHref} target="_blank" rel="noopener noreferrer">Ver</a></td>
        <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
    </tr>
)

export default CourseListRow