import React, {Component} from 'react'
import Cover from './Cover'
import Comments from './Comments'
import CommentForm from './CommentForm'

export default class Post extends Component {
    render() {
        return(
            <div className='main container-fluid'>
                <div className='row p-relative'>
                    <Cover/>
                    <div className='content col-lg-5 '>
                        <div className='container'>
                            <div className='row context'>
                                <div className='col-md-10 mx-auto' >
                                    <img alt="" src='images/cover-top.svg' className='cover-top-svg'/>
                                    <h1 className='mb-4'>{this.props.title}</h1>
                                    <div onClick={this.props.authorClick} className='author text-center mb-4 c-p' data-toggle="modal" data-target=".bd-author-modal-lg">
                                        <span className='text-secondary'>{this.props.author.name}</span>
                                        <img alt="" src={this.props.author.image} className='avatar mr-2'/>
                                    </div>
                                    <div className='text-center mb-5'>
                                        <img alt="" src='images/header-artwork.svg'/>
                                    </div>
                                    <p>{this.props.summary_paragraph.text}</p>
                                    <div className='d-block my-4'>
                                        <div className='title-artwork'></div>
                                        <h3>{this.props.subtitle}</h3>
                                    </div>
                                    {this.props.paragraphs.map((p, index) => {
                                        if(p.data_image)
                                            return (
                                                <div key={index}>
                                                    <img alt="" src={p.data_image} className='meta-imgs'/>
                                                    <p
                                                    data-img={p.data_image}
                                                    data-header={p.data_header}
                                                    data-text={p.data_text}
                                                    data-footer={p.data_footer}>{p.text}</p>
                                                </div>
                                            )
                                        else
                                            return <p key={index}>{p.text}</p>
                                    })}
                                    
                                </div>
                            </div>
                            <div className='row context-footer my-5'>
                                <div className='col-md-12 clearfix'>
                                    <div onClick={this.props.authorClick} className='author float-left c-p' data-toggle="modal" data-target=".bd-author-modal-lg">
                                        <span className='text-secondary'>{this.props.author.name}</span>
                                        <img alt="" src={this.props.author.image} className='avatar mr-2'/>
                                    </div>
                                    <div className='btns float-right'>
                                        <a id='fab' className='fab d-inline'>
                                            <div className='material-ripple mi-heart-c d-inline-block align-middle m-1'>
                                                <i className='material-icons md-36 absolute-center'>favorite_border</i>
                                            </div>
                                        </a>
                                        <div id='offset' className='offset d-inline'>
                                            <a className='material-ripple d-inline-block align-middle m-1 mi-bookmark-c'>
                                                <i className='material-icons md-24 absolute-center'>bookmark</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Comments comments={this.props.comments}/>
                            <CommentForm onSubmit={this.props.handleCommentForm}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}