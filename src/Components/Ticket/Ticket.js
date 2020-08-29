import React from 'react'
import './Ticket.css'

function Ticket(props){
    let flight = props.flight.legs[0].segments[0]
    let arrivalInfo = props.flight.legs[0].segments[props.flight.legs[0].segments.length-1] 
    console.log(props);
    // Отправление
        // Дата
            let departureDate = (new Date(flight.departureDate))
            let departureTimeDate = departureDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
            let departureDayDate = departureDate.toLocaleDateString([],{month:'long',day:'2-digit'})
        // Аэропорт
            let departuredCityCaption = flight.departureCity.caption
            let departureAirportCaption = flight.departureAirport.caption
            let departuredAirportUid = flight.departureAirport.uid
    // Прибытие
        // Дата
            let arrival = props.flight.legs[0].segments[props.flight.legs[0].segments.length-1].arrivalDate
            let arrivalDate1 = (new Date(arrival))
            let arrivalTimeDate = arrivalDate1.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
            let arrivalDayDate = arrivalDate1.toLocaleDateString([],{month:'long',day:'2-digit'})
        // Аэропорт прибытия
            let arrivalAirportCaption = arrivalInfo.arrivalAirport.caption
            let arrivalUid = arrivalInfo.arrivalAirport.uid
    // Полное время маршрута
            let duration = props.flight.legs[0].duration
    // Пересадка
            let transfer = props.flight.legs[0].segments
    // Цена
            let price = props.flight.price.total.amount

    return(
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
                    {departuredCityCaption}, {departureAirportCaption}<span className='spanTicket'> ({departuredAirportUid}) &#8594;</span>{arrivalAirportCaption}<span className='spanTicket'> ({arrivalUid})</span>
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
                        Одна пересадка
                    </span>
                    </h1>
                }
            </div>
    )
}
    
export default Ticket
    