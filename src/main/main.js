import React from 'react';
import './main.css';
import data from '../flights.json'
function Main(props){
    return(
        <div className='main'>
            <div>
                <div className="main_footer">
                    <div className="main_footer_left_text">
                       {props.name} 
                    </div>
                    <div>
                        <div className="main_footer_right_text">Стоимость для одного взрослого пассажира</div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="main_block">  
                </div>
                <p>Рейс выполняет : </p>
                <button className='main_btn'>Выбрать</button>
            </div>
        </div>
    )
}

export default Main
