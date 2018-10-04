import AuthorApi from '../../api/mockAuthorApi'
import * as type from './actionTypes'

export default function loadAuthorsSuccess(authors) {
    return {
        type: type.LOAD_AUTHORS_SUCCESS, authors
    }
}

export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch.loadAuthorsSuccess(authors);
            }).catch(
                error => {
                    throw (error)
                }
            )
    }

}