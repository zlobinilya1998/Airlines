import React from 'react'
import './About.css'

import { sky, air, humans } from '../assets.js'

import { Footer } from '../components.js'

export default function About(){
    return(
        <>  
            <div className='content'>
            <img alt='sky' className='sky' src={sky} />
            <h1 className='first text '>
                Более <span className='year'>300 направлений</span>, прямые агенты авиакомпаний и официальные агенты
            </h1>
            
            <img alt='flight' className='flight' src={air}/>
            <h2 className='second text'>
                Стаж работы ключевых сотрудников в среднем составляет <span className='year'>15 лет</span>
            </h2>
            <img alt='yellow' className='img_about' src={humans}/>
            <Footer/>
            </div>
        </>
    )
}