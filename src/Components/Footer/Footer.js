import React from 'react'
import Time from './Time/Time'
import './Footer.css'


export default class Footer extends React.Component{
    render(){
        return(
            <div className='footer' >
                <Time/>
            </div>
        )
    }
}