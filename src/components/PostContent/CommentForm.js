import React from 'react'
import {Field, reduxForm} from 'redux-form'

const CommentForm = (props) => {
    return(
        <div>
            <div className='row'>
                <div className='col-md-12'>
                    <p className='h3 my-4'>send me your opinion</p>
                    <div className='row'>
                        <div className='col-md-10 mx-auto'>
                            <form onSubmit={props.handleSubmit}>
                                <div className='row'>
                                    <div className='form-group col-md-8 mr-auto'>
                                        <Field name='name' type='text' className='form-control' component={customInput} dir='rtl'/>
                                        <i className='material-icons mi-person'>person</i>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='form-group col-md-12'>
                                        <Field name='message' className='form-control' rows='5' component={customTextarea} placeholder="Message" dir='rtl'/>
                                    </div>
                                </div>
                                <div className='clearfix'>
                                    <input name='score' type='hidden' className='rating' value='0'/>
                                    <div className='float-right'>
                                        <button className='material-ripple btn btn-blue btn-info' type='submit'>send</button>
                                    </div>
                                </div>
                            </form>	
                        </div>
                    </div>
                </div>
            </div>
            <img alt="" src="images/cover-bottom.svg" className="cover-bottom-svg"/>
        </div>
    )
}

const customInput = ({input, label, type, meta: {touched, error}}) => (
        <div>
            <input {...input} placeholder={label} type={type} dir='rtl'/>
            {touched && error && <span className='text-danger'>{error}</span>}
        </div>
)

const customTextarea = ({input, placeholder, rows, meta: {touched, error}}) => (
    <div>
        <textarea {...input} placeholder={placeholder} rows={rows} dir='rtl' className='form-control'></textarea>
        {touched && error && <span className='text-danger'>{error}</span>}
    </div>
)


const validate = (values) => {
    const errors = []
    if(!values.name)
        errors.name = "please enter your name"
    if(!values.message)
        errors.message = "please enter you message"
    return errors
}


export default reduxForm({
    form: 'comment',
    validate
})(CommentForm)

