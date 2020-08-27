import React from 'react'
import './Ticket.css'



function Ticket(props){
    let flight = props.flight.legs[0].segments[0]

            
    // let DepartureInfo= props.flight.legs[0].segments[0]
    // let DepartureInfoBack = props.flight.legs[1].segments[0]
    // let arrivalInfoBack = props.flight.legs[1].segments[props.flight.legs[1].segments.length-1]




    let arrivalInfo = props.flight.legs[0].segments[props.flight.legs[0].segments.length-1] 
    // Время
        // Отправление
        let departureDate = (new Date(flight.departureDate))
        // Время отправления
        let departureTimeDate = departureDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        // День отправления
        let departureDayDate = departureDate.toLocaleDateString([],{month:'long',day:'2-digit'})
        // Прибытие
        let pribitie = props.flight.legs[0].segments[props.flight.legs[0].segments.length-1].arrivalDate
        let arrivalDate1 = (new Date(pribitie))
        let arrivalTimeDate = arrivalDate1.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        let arrivalDayDate = arrivalDate1.toLocaleDateString([],{month:'long',day:'2-digit'})


        // ВРЕМЯ ПРИБЫТИЯ
          









    // Аэропорт отправления
    let departuredCityCaption = flight.departureCity.caption
    let departureAirportCaption = flight.departureAirport.caption
    let departuredAirportUid = flight.departureAirport.uid
    // Аэропорт прибытия
    let arrivalAirportCaption = arrivalInfo.arrivalAirport.caption
    let arrivalUid = arrivalInfo.arrivalAirport.uid



    
    // Полное время маршрута
    let duration = props.flight.legs[0].duration
    // Пересадка
    let transfer = props.flight.legs[0].segments
    // Перевозчик
    let carrier = props.flight.carrier.caption
    // Цена
    let price = props.flight.price.total.amount




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
                        {departuredCityCaption},{departureAirportCaption}<span className='span'> ({departuredAirportUid}) &#8594;</span>{arrivalAirportCaption}<span className='span'> ({arrivalUid})</span>
                    </p>
                    <div className='time'>
                        <div className="time_block">
                            <div>
                                <strong>
                                    {departureTimeDate}
                                </strong>
                            </div>
                            <div>
                                <span>
                                    {departureDayDate}  
                                </span>
                            </div>  
                        </div>
                        <div className="time_duration">
                            <div>
                                <span role='img' aria-label="img">
                                    &#8986;
                                </span>
                                <strong>
                                    {Math.floor(duration/60)} ч {duration % 60} мин
                                </strong>
                            </div>
                        </div>
                        <div className="time_block">
                            <div>
                                <span>
                                    {arrivalDayDate}
                                </span>
                            </div>  
                            <div>
                                <strong>
                                    {arrivalTimeDate}
                                </strong>
                            </div>
                        </div>
                    </div>

                    {transfer.length-1 > 0 &&
                        <h1 className='transfer'>
                        <span>
                            {transfer.length-1 + ' Пересадка'}
                        </span>
                        </h1>
                    }
                    
                    <p className='carrier'>
                        Рейс выполняет : <strong>{carrier}</strong>
                    </p>
                    <hr style={{height:'.1px'}}/>
                    <button className='main_btn'>
                        Выбрать
                    </button>
                </div>
            </>
        )
    }
export default Ticket
    