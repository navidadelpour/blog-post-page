import authorData from '../store/authorData'

export const FETCH_AUTHOR_REQUEST = 'FETCH_AUTHOR_REQUEST'
export const FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS'
export const FETCH_AUTHOR_ERROR = 'FETCH_AUTHOR_ERROR'
export function fetchAuthor(author_name) {
    return dispatch => {
        dispatch({type: FETCH_AUTHOR_REQUEST});
        setTimeout(() => {
            fetch('', {})
            .then((response) => {
                dispatch({type: FETCH_AUTHOR_SUCCESS, data: authorData})
            })
            .catch((error) => {
                dispatch({type: FETCH_AUTHOR_ERROR, data: error})
            }) 
        }, 1)
    }
}
