import React from 'react';
import './main.css';
import data from '../flights.json'
function Main(props){
    return(
        <div className='main'>
            <div>
                <div className="main_footer">
                </div>
                <p>МАРШРУТ -----------------------------------------</p>
                <p>Рейс выполняет : </p>
                <div className='main_time'>
                    <div className="main_time_block">
                        <div><strong>Time</strong></div>
                        <div><span>Date</span></div>  
                    </div>
                    <div className="main_time_block">
                        <div><strong>Time</strong></div>
                        <div><span>Date</span></div>  
                    </div>
                    <div className="main_time_block">
                        <div><strong>Time</strong></div>
                        <div><span>Date</span></div>  
                    </div>
                </div>
                <hr/>
                <button className='main_btn'>Выбрать</button>
            </div>
        </div>
    )
}

export default Main
