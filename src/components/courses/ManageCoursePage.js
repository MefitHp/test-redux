import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../redux/actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursePage extends Component {
    state = {
        course: Object.assign({}, this.props.course),
        errors: {}
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) })
        }
    }


    updateCourseState = (e) => {
        const fieldName = e.target.name;
        let course = this.state.course;
        course[fieldName] = e.target.value;
        this.setState({ course: course });
    }

    saveCourse = (e) => {
        e.preventDefault();
        let course = this.state.course
        this.props.actions.saveCourse(course);
        this.props.history.push('/courses')
    }
    render() {
        return (
            <div>
                <CourseForm
                    onChange={this.updateCourseState}
                    allAuthors={this.props.authors}
                    course={this.state.course}
                    errors={this.state.errors}
                    onSave={this.saveCourse}
                />
            </div>
        )
    }
}

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if (course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id;
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    if (courseId) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })

    return {
        course: course,
        authors: authorsFormattedForDropdown,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);