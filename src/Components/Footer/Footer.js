import React from 'react'
import './Footer.css'


import instagramm from '../../Assets/instagramm.png'
import vk from '../../Assets/vk.png'
import google from '../../Assets/google.png'

export default class Footer extends React.Component{
    render(){
        return(
            <div className='w-100 d-flex justify-content-center footer' >
                <div style={{width:'25vh',}} className='d-flex justify-content-around mt-auto mb-auto'>
                    <a className='a' href='https://www.instagram.com/?hl=ru'>
                        <img className='img' alt='instagramm' src={instagramm}></img>
                    </a>
                    <a className='a' href='https://vk.com/feed'>
                        <img className='img' alt='vk' src={vk}></img>
                    </a>
                    <a className='a' href='https://www.google.ru/'>
                        <img className='img' alt='google' src={google}></img>
                    </a>
                </div>
            </div>
        )
    }
}