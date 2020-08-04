import React from 'react'
import yellow from '../Assets/pexels-photo-4775426.jpeg' 
import air from '../Assets/hotpng.com.png'
import './About.css'
import sky from '../Assets/Sky.png'
import Footer from '../Components/Footer/Footer'

export default class About extends React.Component{
    render(){
        return(
            <>  
                <img alt='sky' className="w-100" style={{height:'25vh'}} src={sky}/>
                <div className='air d-flex' >
                    <img
                    alt='air' 
                    className='w-50' 
                    src={air}>
                    </img>
                    <h1 
                     className='text w-50'>
                        Более <span style={{color:'turquoise',borderBottom:'2px solid gray'}}>300 направлений</span>, прямые агенты авиакомпаний и официальные агенты
                    </h1>

                </div>

                <h2 
                    className='work text'>
                        Стаж работы ключевых сотрудников в среднем составляет <span style={{color:'turquoise',borderBottom:'2px solid gray'}}>15 лет</span>
                </h2>
                <img 
                    alt='yellow'
                    className='ml-auto mr-auto row'
                    src={yellow}>
                </img>
                <Footer/>
            </>
        )
    }
}