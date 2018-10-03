import * as types from '../actions/actionTypes'
//El reducer es sólo una función que recibe el current state y una acción y devuelve un nuevo state.
//state = [] inicializa el state como un lista.
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            // return [...state, Object.assign({}, action.course) ];
            return action.courses;
        default:
            //En el caso que este reducer no tenga que ejecutar ninguna action, se regresa el state intacto.
            return state;
    }
}