import * as PostActions from "../actions/PostActions"

const initialState = {
    author: {
        name: "",
        image: ""
    },
    title: "reducer init",
    subtitle: "",
    summary_paragraph: {
        text: ""
    },
    paragraphs: [
        {
            text: "",
            data_image: "",
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
}


export default function postReducer(state = initialState, action) {
    switch(action.type) {
        // TODO: implement fetch_post_request
        case PostActions.FETCH_POST_SUCCESS:
            return{...state, ...action.data}

        // TODO: implement fetch_post_error

        // TODO: implement fetch_comment_request
        case PostActions.POST_COMMENT_SUCCESS: 
            var new_comment = {...action.data, image: "images/avatar.jpg", date: "201" + action.data.rate}
            return {...state, comments: [...state.comments, new_comment]}
        // TODO: implement fetch_comment_error
        default:
            return state;
    }
}


