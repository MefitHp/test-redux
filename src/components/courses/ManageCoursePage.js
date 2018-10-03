import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../redux/actions/courseActions'

class ManageCoursePage extends Component {
    render() {
        return (
            <div>
                <h1>Administrador de cursos: </h1>
            </div>
        )
    }
}

function mapStateToProps(state, OwnProps) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);