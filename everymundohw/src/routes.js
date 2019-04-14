import React from 'react'
import {Route} from 'react-router-dom'
import MainPage from './MainPage'

const Routes = () =>
{
    return (
        <div>
            <Route exact path='/' component={MainPage}/>
        </div>
    )
};

export default Routes;