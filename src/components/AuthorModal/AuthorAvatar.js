import React from 'react'

const Avatar = (props) => {
    return(
        <div className='col-lg-5 p-0 order-1 order-lg-2 avatar-container'>
            <div className='avatar-bg' style={{backgroundImage: "url(" + props.image + ")"}}>
                <a href='' className='material-ripple mi-times-c d-inline-block align-middle' data-dismiss="modal">
                    <i className='material-icons absolute-center'>close</i>
                </a>
                <div className='modal-caption text-center w-100 p-5'>
                    <p className='name d-inline-block'><span className='font-weight-bold'>{props.name}</span></p>
                    <div className='info'>
                        <div className='d-inline py-1 px-3 br-2'>
                            <i className='material-icons ml-2 align-middle'>favorite</i>
                            <span>{props.likes}</span>
                        </div>
                        <div className='d-inline py-1 px-3 br-2'>
                            <i className='material-icons ml-2 align-middle'>favorite</i>
                            <span>{props.views}</span>
                        </div>
                        <div className='d-inline py-1 px-3'>
                            <i className='material-icons ml-2 align-middle'>favorite</i>
                            <span>{props.followers}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avatar