import React from 'react'
import {Route} from 'react-router-dom'
import MainPage from './MainPage'

const Routes = () =>
{
    return (
        <div>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/search' />
        </div>
    )
};

export default Routes;