import React from 'react'
import './Footer.css'
import Time from './Time/Time'


export default class Footer extends React.Component{
    render(){
        return(
            <div className='w-100 d-flex footer align-items-center' >
                <Time/>
            </div>
        )
    }
}