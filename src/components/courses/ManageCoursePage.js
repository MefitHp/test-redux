import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../redux/actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursePage extends Component {
    state = {
        course: Object.assign({}, this.props.initialCourse),
        errors: {}
    }
    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={this.props.authors}
                    course={this.state.course}
                    errors={this.state.errors}
                />
            </div>
        )
    }
}

function mapStateToProps(state, OwnProps) {
    const course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })

    return {
        initialCourse: course,
        authors: authorsFormattedForDropdown,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);