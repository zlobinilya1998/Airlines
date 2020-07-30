import React from 'react'
import './Navigation.css'
import Main from '../main/main'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


import Home from '../../Pages/Home'
import Road from '../../Pages/Road'


export default class Navigation extends React.Component{
    render(){
        return(
            <>  
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <button href='/Home'className="nav-link">
                                    Главная<span className="sr-only">(current)</span>
                                </button>
                            </li>

                            <li className="nav-item">
                                <button href='/Road' className="nav-link">
                                    Маршруты
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Router>
                    <Switch>
                        <Route exact path='/Home' component={Home}/>
                        <Route exact path='/Road' component={Road}/>
                    </Switch>
                </Router>
            </>
        )
    }
}
