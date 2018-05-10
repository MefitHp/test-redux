import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import { bindActionCreators } from 'redux'

class CoursesPage extends Component {
    state = {
        course:{
            title: '',
        }
    }

    onChange = (e) => {
        let course = this.state.course;
        course[e.target.name] = e.target.value;
        this.setState({course})
        console.log(this.state.course.title)
    };

    onSubmit = (e) => {
        e.preventDefault();
        // alert(`Saving: ${this.state.course.title}`)
        this.props.actions.createCourse(this.state.course);
    }

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>
    }
  render() {
    return (
      <div>
        <h1>Courses:</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <form onSubmit={this.onSubmit}>
            <label>Title: </label> <br/>
            <input type="text" name="title" onChange={this.onChange} value={this.state.course.title}/>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
