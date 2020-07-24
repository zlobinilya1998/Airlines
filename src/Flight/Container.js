import React from 'react'
import '../Flight/Container.css'


export default props => (
    <>
    <div className='main'>dasds
                <div>
                    <div className="main_footer">
                        <div className='prices'>
                            <p>{props.price} &#8381;</p>
                        </div>
                        <div className='passenger'>
                            Стоимость для одного взрослого пассажира
                        </div>
                    </div>
                    <p style={{textAlign:'center',marginBottom:'10px',marginTop:'10px'}}>{props.departureCity}, {props.departureAirport}<span style={{color:'blue'}}> ({props.departureAirportUid}) &#8594;</span> {props.arrivalCity}, {props.arrivalAirport}<span style={{color:'blue'}}> ({props.arrivalAirportUid})</span></p>
                    <div className='main_time'>
                        <div className="main_time_block">
                            <div><strong>Time start {props.departureDate}</strong></div>
                            <div><span>Date start</span></div>  
                        </div>
                        <div className="main_time_duration">
                            <div><strong>{Math.floor(props.duration/60)} ч {props.duration % 60} мин</strong></div>
                    </div>
                        <div className="main_time_block">
                            <div><strong>T</strong></div>
                            <div><span>{props.arrivalDate}</span></div>  
                        </div>
                    </div>
                    <hr style={{width:'80%',height:'.1px'}}></hr>
                    <p style={{textAlign:'center'}}>Рейс выполняет : <strong>{props.carrier}</strong></p>
                    <hr style={{height:'.1px'}}/>
                    <p style={{textAlign:'center',marginBottom:'10px',marginTop:'10px'}}>МАРШРУТ</p>
                    <div className='main_time'>
                        <div className="main_time_block">
                            <div><strong>Time start</strong></div>
                            <div><span>Date start</span></div>  
                        </div>
                        <div className="main_time_duration">
                            <div><strong>{Math.floor(props.duration/60)} ч {props.duration % 60} мин</strong></div>
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
    </>
)