import React from 'react'
import './TicketBack.css'


function TicketBack(props){
    let flight = props.flight.legs[1].segments[0]
    
    let arrivalInfo = props.flight.legs[1].segments[props.flight.legs[1].segments.length-1] 
    let departureInfo = flight
    let departureAirport = departureInfo.departureAirport.caption
    let departuredAirportUid = departureInfo.departureAirport.uid

        // Время
        // Отправление
        let departureDate = (new Date(flight.departureDate))
        let departureTimeDate = departureDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        let departureDayDate = departureDate.toLocaleDateString([],{month:'long',day:'2-digit'})
        
        
        
        
        // Прибытие
        let pribitie = props.flight.legs[1].segments[props.flight.legs[1].segments.length-1].arrivalDate
        let arrivalDate1 = (new Date(pribitie))
        let arrivalTimeDate = arrivalDate1.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        let arrivalDayDate = arrivalDate1.toLocaleDateString([],{month:'long',day:'2-digit'})
        

        let arrivalCity = arrivalInfo.arrivalCity.caption


        // Перевозчик
        let carrier = props.flight.carrier.caption



        // // Аэропорт отправления
        // let departuredCityCaption = flight.departureCity.caption
        // let departureAirportCaption = flight.departureAirport.caption
        // let departuredAirportUid = flight.departureAirport.uid
        // // Аэропорт прибытия

        // let DepartureInfoBack = props.flight.legs[1].segments[0]
        // let arrivalInfoBack = props.flight.legs[1].segments[props.flight.legs[1].segments.length-1]







        let arrivalAirportCaption = arrivalInfo.arrivalAirport.caption
        let arrivalUid = arrivalInfo.arrivalAirport.uid
        let duration = props.flight.legs[1].duration


    return(
        <>
        <div className='main'>
        <p className="route">
            {departureAirport}<span className='spanTicket'> ({departuredAirportUid}) &#8594; </span>{arrivalCity},{arrivalAirportCaption}<span className='spanTicket'> ({arrivalUid})</span>
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
                    <p className='carrier'>
                        Рейс выполняет : <strong>
                            {carrier}
                            </strong>
                    </p>
                    <button className='main_btn'>
                        Выбрать
                    </button>
                </div>
            </>
    )
}

export default TicketBack