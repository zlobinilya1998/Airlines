import React from 'react';
import '../Flight/Flight.css'

class Flight extends React.Component{
  render(){
    return (
        <div className='main'>
                <div>
                    <div className="main_footer">
                        <div className='prices'>
                            <p>&#8381;</p>
                        </div>
                        <div className='passenger'>
                            Стоимость для одного взрослого пассажира
                        </div>
                    </div>
                    <p>МАРШРУТ</p>
                    <div className='main_time'>
                        <div className="main_time_block">
                            <div><strong>Time start</strong></div>
                            <div><span>Date start</span></div>  
                        </div>
                        <div className="main_time_duration">
                            {/* <div><strong>{Math.floor(props.duration/60)} ч {props.duration % 60} мин</strong></div> */}
                    </div>
                        <div className="main_time_block">
                            <div><strong>Time end</strong></div>
                            <div><span>Date end</span></div>  
                        </div>
                    </div>
                    <hr/>
                    <p>Рейс выполняет :  </p>
                    <button className='main_btn'>Выбрать</button>
                </div>
        </div>
    )
    }
}
export default Flight