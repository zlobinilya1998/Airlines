import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './404.css'

import { About } from '../components'

export default function Error404(){
    return(
        <Router>
            <NavLink className='error' href='/home'>
                Ошибка 404. Страница не найдена
            </NavLink> 

            <Switch>
                <Route exact path='/home' component={About}/>   
            </Switch>
        </Router>
    )
}




