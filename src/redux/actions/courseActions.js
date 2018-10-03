import * as types from './actionTypes'
import courseApi from '../../api/mockCourseApi'

export function loadCoursesSuccess(courses) {
    //El action regresa el tipo de Acción y el objeto de dato o dato.
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}

//Un thunk siempre regresa una función que acepta un dispatch 
export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    }
}