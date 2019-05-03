import React from 'react'

const Cover = () => {
    return(
        <div>
            <img alt="" src='images/cover.jpg' className='meta-imgs'/>
            <div className='cover col-lg-7'
            data-img='images/cover.jpg'
            data-header='cover header'
            data-text='cover text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.'
            data-footer='somewhere, intheworld'>
                <div className='overlay'>
                    <span className='material-ripple btn-fullscreen btn-opacity-light'>
                        <i className='material-icons md-24 p-0 align-middle absolute-center'>fullscreen</i>
                    </span>
                    <div className='caption col-lg-6'>
                        <h3 className='header'>header</h3>
                        <div className='line'></div>
                        <p className='font-weight-light'></p>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;