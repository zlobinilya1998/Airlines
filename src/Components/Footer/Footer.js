import React from 'react'
import Time from './Time/Time'
import './Footer.scss'


export default class Footer extends React.Component{
    render(){
        return(
            <div className='w-100 d-flex footer align-items-center' >
                <Time/>
            </div>
        )
    }
}