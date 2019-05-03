import * as AuthorActions from '../actions/AuthorActions'

const initialState = {
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
            text: "",
            link: "/"
        },
    ],
    fetchedAuthor: false
}

export default function AuthorReducer(state = initialState, action) {
    switch (action.type) {
        // TODO: implement fetch_author_request
        case AuthorActions.FETCH_AUTHOR_SUCCESS:
            return {...state, ...action.data, fetchedAuthor: true}
    
        // TODO: implement fetch_author_error

        default:
            return state;
    }
}