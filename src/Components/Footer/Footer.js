import React from 'react'
import './Footer.css'

import vk from '../../Assets/vk.png'

export default class Footer extends React.Component{
    render(){
        return(
            <div className='w-100 d-flex justify-content-end footer' >
                <div style={{width:'30vh',color:'white'}} className='d-flex justify-content-end mt-auto mb-auto'>
                    
                    <a className='a' href='https://vk.com/id90455749'>
                        <img className='img' alt='vk' src={vk}></img>
                    </a>
                </div>
            </div>
        )
    }
}