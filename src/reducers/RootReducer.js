import { combineReducers } from "redux"
import post from "./PostReducer"
import author from "./AuthorReducer"
import {reducer as form} from 'redux-form'

export default combineReducers({
    post,
    author,

    form
})