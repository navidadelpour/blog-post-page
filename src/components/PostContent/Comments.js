import React from 'react'

const Comments = (props) => {
    function commentScore(score) {
        const stars = []
        for(var i = 0; i < 5; i++) {
            if(i < score)
                stars.push(<i key={i} className='material-icons mi-star'>star</i>)
            else
                stars.push(<i key={i} className='material-icons mi-star empty'>star</i>)
        }
        return stars;
    }

    return (
        <div>
            <div className='text-center mt-5 mb-3'>
                <img alt="" src='images/header-artwork.svg'/>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <p className='h3 my-5'>comments</p>
                    <div className='row'>
                        <div className='col-md-10 mx-auto'>
                            {props.comments.map((comment, index) => {
                                return(
                                    <div key={index} className='comment p-3 mb-5'>
                                        <div className='clearfix'>
                                            <div className='author float-left'>
                                                <div className='clearfix'>
                                                    <div className='float-right text-muted'>
                                                        <span className='d-block '>{comment.name}</span>
                                                        <span className='d-block'>{comment.date}</span>
                                                    </div>
                                                    <div className='float-left mr-3'>
                                                        <img alt="" src={comment.image} className='avatar'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='score float-right'>
                                                {commentScore(comment.score)}
                                            </div>
                                        </div>
                                        <p className='px-4 py-2'>{comment.message}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5 mb-3'>
                <img alt="" src='images/header-artwork.svg'/>
            </div>
        </div>
    )
}

export default Comments