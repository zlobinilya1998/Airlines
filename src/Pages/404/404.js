import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Nav} from 'react-bootstrap'



import Home from '../../Pages/About/About'


import './404.css'

export default function Error404(){
    return(
        <>
            <Nav.Link className='error' href='/home'>
                Ошибка 404. Страница не найдена
            </Nav.Link> 
            <Router>
                <Switch>
                    <Route exact path='/home' component={Home}/>   
                </Switch>
            </Router>
        </>
    )
}




