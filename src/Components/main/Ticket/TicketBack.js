import React from 'react'
import './Ticket.css'



function Ticket1(props){
    let flight = props.flight.legs[0].segments[0]
    // Аэропорт отправления
    let arrivalAirport = props.arrivalInfo.arrivalAirport.caption
    let arrivalUid = props.arrivalInfo.arrivalAirport.uid
    let arrivalCityCaption = flight.departureCity.caption


    // Цена
    let price = props.price




        return(
            <>
                <div className='main'>
                    <div className="footer">
                        <div className='price'>
                            {price} &#8381;
                        </div>
                        <p className='passenger'>
                            Стоимость для одного взрослого пассажира
                        </p>
                    </div>
                    <p className="route">
                    {arrivalCityCaption},
                    {flight.departureAirport.caption}<span className='span'> ({flight.departureAirport.uid}) &#8594;</span>{arrivalAirport}<span className='span'> ({arrivalUid})</span>
                    </p>
                    <div className='time'>
                        <div className="time_block">
                            <div>
                                <strong>
                                    {props.departureTimeDate}
                                </strong>
                            </div>
                            <div>
                                <span>
                                    {props.departureDayDate}  
                                </span>
                            </div>  
                        </div>
                        <div className="time_duration">
                            <div>
                                <span role='img' aria-label="img">
                                    &#8986;
                                </span>
                                <strong>
                                    {Math.floor(props.duration/60)} ч {props.duration % 60} мин
                                </strong>
                            </div>
                        </div>
                        <div className="time_block">
                            <div>
                                <span>
                                    {props.arrivalDayDate}
                                </span>
                            </div>  
                            <div>
                                <strong>
                                    {props.arrivalTimeDate}
                                </strong>
                            </div>
                        </div>
                    </div>

                    {props.obj.length-1 > 0 &&
                        <h1 className='transfer'>
                        <span>
                            {props.obj.length-1 + ' Пересадка'}
                        </span>
                        </h1>
                    }
                    
                    <p className='carrier'>
                        Рейс выполняет : <strong>{props.carrier}</strong>
                    </p>
                    <hr style={{height:'.1px'}}/>

                    
            
                    <button className='main_btn'>
                        Выбрать
                    </button>
                </div>
            </>
        )
    }
export default Ticket1
    