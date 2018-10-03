import React from 'react'
import CourseListRow from './CourseListRow'

const CourseList = ({ courses }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    <th>Duración</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course =>
                    <CourseListRow key={course.id} course={course} />
                )}
            </tbody>
        </table>
    )
}

export default CourseList;