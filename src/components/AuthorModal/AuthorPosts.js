import React from 'react'
import AuthorPost from './AuthorPost';

const AuthorPosts = (props) => {
    return(
        <div className='col-lg-7 p-0 posts order-2 order-lg-1'>
            {        
                props.posts.map((post, index) => {
                    return <AuthorPost key={index} {...post} />
                })
            }
        </div>
    )
}

export default AuthorPosts
