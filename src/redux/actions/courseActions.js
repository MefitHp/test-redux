import * as types from './actionTypes'
import courseApi from '../../api/mockCourseApi'

export function loadCoursesSuccess(courses) {
    //El action regresa el tipo de Acción y el objeto de dato o dato.
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course }
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course }
}

//Un thunk siempre regresa una función que acepta un dispatch 
export function loadCourses() {
    return dispatch => {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    }
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse))
        }).catch(
            error => {
                throw (error);
            }
        )
    }

}