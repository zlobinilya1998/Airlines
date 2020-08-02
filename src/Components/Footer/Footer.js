import React from 'react'
import './Footer.css'
import Time from '../Time/Time'

import vk from '../../Assets/vk.png'

export default class Footer extends React.Component{
    render(){
        return(
            <div className='w-100 d-flex footer align-items-center' >
                <a className='a ' href='https://vk.com/id90455749'>
                    <img className='img' alt='vk' src={vk}></img>
                </a>
                <Time/>
            </div>
        )
    }
}