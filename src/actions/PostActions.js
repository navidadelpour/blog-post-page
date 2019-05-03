import postData from "../store/postData"
import {reset} from 'redux-form'
import $ from 'jquery'

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR'
export function fetchPost(post_name) {
    return dispatch => {
        dispatch({type: FETCH_POST_REQUEST});
        setTimeout(() => {
            fetch('', {})
            .then((response) => {
                dispatch({type: FETCH_POST_SUCCESS, data: postData})
            })
            .catch((error) => {
                dispatch({type: FETCH_POST_ERROR, data: error})
            }) 
        }, 2000);
    }
}

export const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST'
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'
export const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR'
export function postComment(comment_data) {
    return dispatch => {
        dispatch({type: POST_COMMENT_REQUEST});
        setTimeout(() => {
            fetch('', {})
            .then((response) => {
                dispatch({type: POST_COMMENT_SUCCESS, data: comment_data})
                dispatch(reset('comment'))
                $('.simple-rating .mi-star').addClass("empty")
            })
            .catch((error) => {
                dispatch({type: POST_COMMENT_ERROR, data: error})
            }) 
        }, 1)
    }
}

