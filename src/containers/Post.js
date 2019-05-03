import React, {Component} from 'react'
import PostContent from "../components/PostContent"
import AuthorModal from '../components/AuthorModal';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as PostActions from "../actions/PostActions"
import * as AuthorActions from "../actions/AuthorActions"

class Post extends Component {
    constructor(props) {
        super(props)
        this.props.PostActions.fetchPost(this.props.match.params.post_name)
        this.authorClick = this.authorClick.bind(this)
        this.handleCommentForm = this.handleCommentForm.bind(this)
    }

    authorClick(event) {
        if(!this.props.author.fetchedAuthor)
            this.props.AuthorActions.fetchAuthor(this.props.post.author.name)
    }

    handleCommentForm(values) {
        values = {...values, rate: document.getElementsByClassName("rating")[0].value}
        this.props.PostActions.postComment(values)
    }

    render() {
        return(
            <div>
                <PostContent
                    {...this.props.post}
                    authorClick={this.authorClick}
                    handleCommentForm={this.handleCommentForm}
                />
                <AuthorModal
                    {...this.props.author}
                />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        post: state.post,
        author: state.author,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        PostActions: bindActionCreators(PostActions, dispatch),
        AuthorActions: bindActionCreators(AuthorActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)