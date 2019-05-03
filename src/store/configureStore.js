import {createStore, applyMiddleware} from 'redux'
import RootReducer from '../reducers/RootReducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

export const initialState = {
    post: {
        author: {
            name: "",
            img: ""
        },
        title: "configure store init",
        subtitle: "",
        paragraphs: [
            {
                text: "",
                data_img: "",
                data_header: "",
                data_text: "",
                data_footer: ""
            },
        ],
        comments: [
            {
                name: "",
                date: "",
                rate: 0,
                message: ""
            },
        ]
    },
    author: {
        information: {
            name: "",
            image: "",
            likes: "",
            views: "",
            followers: ""
        },
        posts: [
            {
                title: "",
                text: ""
            },
            {
                title: "",
                text: ""
            }
        ],
        fetchedAuthor: false
    }
}


var logger = createLogger({
    collapsed: true
});
var store = createStore(RootReducer, applyMiddleware(thunk, logger));
export default store;