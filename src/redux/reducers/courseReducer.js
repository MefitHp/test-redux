import * as types from '../actions/actionTypes'
import initialState from './initialState'
//El reducer es sólo una función que recibe el current state y una acción y devuelve un nuevo state.
//state = [] inicializa el state como un lista.
export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            // return [...state, Object.assign({}, action.course) ];
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.course)];

        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.course.id),
            Object.assign({}, action.course)
            ]

        default:
            //En el caso que este reducer no tenga que ejecutar ninguna action, se regresa el state intacto.
            return state;
    }
}