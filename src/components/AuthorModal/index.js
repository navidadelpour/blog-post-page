import React, {Component} from 'react'
import AuthorAvatar from './AuthorAvatar'
import AuthorPosts from './AuthorPosts';

export default class AuthorModal extends Component {
    render() {
        return(

            <div className="modal fade bd-author-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className='row'>

                            <AuthorAvatar {...this.props.information}/>
                            <AuthorPosts posts={this.props.posts}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

