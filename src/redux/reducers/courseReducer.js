import * as types from '../actions/ActionTypes'

export default function courseReducer(state = [], action) {
	switch (action.type) {
		case types.LOAD_COURSES_SUCCESS:
			return action.courses;
		//[...state,
		// Object.assign({}, action.course)
		// ];

		default:
			return state;
	}
}