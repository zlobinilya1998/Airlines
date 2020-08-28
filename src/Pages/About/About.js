import React from 'react'
import yellow from '../../Assets/pexels-photo-4775426.jpeg' 
import air from '../../Assets/hotpng.com.png'
import './About.css'
import sky from '../../Assets/Sky.png'
import Footer from '../../Components/Footer/Footer'

export default function About(){
    return(
        <>  
            <div className='content'>
            <img alt='sky' className="sky" src={sky}/>
            <h1 className='first text '>
                Более <span className='year'>300 направлений</span>, прямые агенты авиакомпаний и официальные агенты
            </h1>
            <img alt='flight' className='flight' src={air}/>
            <h2 className='second text'>
                Стаж работы ключевых сотрудников в среднем составляет <span className='year'>15 лет</span>
            </h2>
            <img alt='yellow' className='img_about'src={yellow}/>
            <Footer/>
            </div>
        </>
    )
}