import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import { bindActionCreators } from 'redux'

class CoursesPage extends Component {

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>
    }
    render() {
        return (
            <div>
                <h1>Courses:</h1>
                {this.props.courses.map(this.courseRow)}
            </div>
        )
    }
}

// Propiedades del Store que queremos ver en nuestro componente
function mapStateToProps(state, ownProps) {
    return {
        //Viene del rootReducer
        courses: state.courses
    }
}
//Acciones que quiero estén expuestas en mi componente
function mapDispatchToProps(dispatch) {
    return {
        //Mapea las acciones disponibles, y les agrega el dispatch
        //Ya sólo se necesita usar this.props.actions.actionToDispatch
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);