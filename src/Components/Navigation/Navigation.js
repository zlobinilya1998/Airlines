import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './Navigation.css'

import TicketList from '../Main/TicketList.jsx'
import Home from '../About/About.js'
import Error from '../404/404.jsx'

export default function Navigation(){
        return(   
            <Router>
                <div className='navBar'>
                    <ul>
                        <NavLink to='/home' className='button'>Главная</NavLink>
                        <NavLink to='/ticket' className='button'>Авиабилеты</NavLink>          
                    </ul>
                </div>

                <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/ticket' component={TicketList}/>
                    <Route exact path='/' component={Home} />    
                    <Route component={Error}/>       
                </Switch>
            </Router>
        )
    }



