import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './Navigation.css'

import { TicketList, About, Error } from '../components.js'


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
                    <Route exact path='/' component={About} />   
                    <Route exact path='/home' component={About}/>
                    <Route exact path='/ticket' component={TicketList}/>
 
                    <Route component={Error}/>       
                </Switch>
            </Router> 
        )
    }



