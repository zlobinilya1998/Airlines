import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import './Navigation.css'
import { TicketList, About, Footer } from '../components.js'
import '../404/404.css'



export default function Navigation(){
    const buttons = ['Home','Ticket','About us']
        return(
            <>   
            <Router>
                <div className='navBar'>
                    <ul className='navUl'>  
                        {buttons.map(button=><NavLink to={`${button}`} className='button' key={button}>{button}</NavLink>) }  
                    </ul>
                </div>

                <Switch>
                    <Route exact path='/' component={About} />   
                    <Route exact path='/Home' component={About}/>
                    <Route exact path='/Ticket' component={TicketList}/> 
                    <Route>
                        <NavLink to='/Home' className='error'>
                            Ошибка 404. Страница не найдена
                        </NavLink> 
                    </Route>       
                </Switch>
                
            </Router> 
            <Footer/>
            </>
        )
    }



