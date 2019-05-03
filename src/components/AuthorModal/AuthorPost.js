import React from 'react'
import {Link} from 'react-router-dom'

const AuthorPost = (props) => {
    return(
        <div className='post m-4 p-3 d-block'>
            <div href='' className='row'>
                <div className='col-lg-8 order-2 order-lg-1'>
                    <Link to={props.link} className='d-block post-content'>
                        <h4 className='text-dark'>{props.title}</h4>
                        <p className='text-muted'>{props.text}</p>
                    </Link>
                    <div className='row post-footer'>
                        <div className='align-middle text-center text-dark m-1 p-0 col'>
                            <i className='material-icons align-middle md-18'>favorite_border</i>
                            <span>100</span>
                        </div>
                        <div className='align-middle text-center text-dark m-1 p-0 col'>
                            <i className='material-icons align-middle md-18'>visibility</i>
                            <span>100</span>
                        </div>
                        <a href='' className='align-middle text-center text-dark m-1 p-0 col d-block'>
                            <i className='material-icons align-middle md-18'>share</i>
                            <span>share</span>
                        </a>
                    </div>
                </div>
                <div className='col-lg-4 order-1 order-lg-2'>
                    <div className='img-container' style={{backgroundImage: "url(images/cover.jpg)"}}></div>
                </div>
            </div>
        </div>	
    )
}
export default AuthorPost

