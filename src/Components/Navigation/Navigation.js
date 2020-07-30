import React from 'react'
import './Navigation.css'


class Navigation extends React.Component{
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
                                <button className="nav-link">
                                    Главная<span className="sr-only">(current)</span>
                                </button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link">
                                    Маршруты
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navigation