import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ManageCoursePage extends Component {
    render() {
        return (
            <div></div>
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
        actions: bindActionCreators(actions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);