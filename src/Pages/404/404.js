import React from 'react'
import './404.css'
import './style.scss'

export default class Error404 extends React.Component{
    render(){
        return(
            <>
            <div className='error'>
                <p className='error_p'>
                Ошибка 404. Страница не найдена
                </p>
                <hr className='hr'/>
            </div>
            </>
        )
    }
} 