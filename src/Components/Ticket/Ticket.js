import React from 'react'
import './Ticket.css'

function Ticket({flight}){
    let departureInfo = flight.legs[0].segments[0]
    let arrivalInfo = flight.legs[0].segments[flight.legs[0].segments.length-1] 
    // Отправление
        // Дата
            let departureDate = (new Date(departureInfo.departureDate))
            let departureTimeDate = departureDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
            let departureDayDate = departureDate.toLocaleDateString([],{month:'long',day:'2-digit'})
        // Аэропорт
            let departuredCityCaption = departureInfo.departureCity.caption
            let departureAirportCaption = departureInfo.departureAirport.caption
            let departuredAirportUid = departureInfo.departureAirport.uid
    // Прибытие
        // Дата
            let arrival = flight.legs[0].segments[flight.legs[0].segments.length-1].arrivalDate
            let arrivalDate1 = (new Date(arrival))
            let arrivalTimeDate = arrivalDate1.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
            let arrivalDayDate = arrivalDate1.toLocaleDateString([],{month:'long',day:'2-digit'})
        // Аэропорт прибытия
            let arrivalAirportCaption = arrivalInfo.arrivalAirport.caption
            let arrivalUid = arrivalInfo.arrivalAirport.uid
    // Полное время маршрута
            let duration = flight.legs[0].duration
    // Пересадка
            let transfer = flight.legs[0].segments
    // Цена
            let price = flight.price.total.amount

    return(
        <div className='main'>
            <div className="footerTicket">
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

            {transfer.length-1 > 0 ?
                <h1 className='transfer'>
                    <span>
                        Одна пересадка
                    </span>
                </h1>
                :
                <hr className='ticketHr'/>
            }
        </div>
    )
}
    
export default Ticket
    