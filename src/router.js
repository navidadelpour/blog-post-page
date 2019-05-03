import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Post from './containers/Post'


const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/:post_name" component={Post}/>
            </div>
        </BrowserRouter>
    )
}

export default Router