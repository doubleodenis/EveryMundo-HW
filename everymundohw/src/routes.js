import React from 'react'
import {Route} from 'react-router-dom'
import MainPage from './MainPage'
import SearchView from './components/Search'
const Routes = () =>
{
    return (
        <div>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/search' component={SearchView}/>
        </div>
    )
};

export default Routes;