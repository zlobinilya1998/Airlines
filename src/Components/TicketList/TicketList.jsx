import React, { useState} from 'react';
import data from '../../flights.json'

import './TicketList.css'

import { Ticket, TicketBack, Sorting } from '../components'



export default function TicketList(){
    let [flights,SetFlights] = useState(data.result.flights)

    let x = data.result.flights
    let y = data.result.flights

    
    // Сортировка по цене
    let sortAscendingPrice = () =>{
        SetFlights([...flights].sort((a,b)=>a.flight.price.total.amount-b.flight.price.total.amount))
    }
    let sortDescendingPrice = () =>{
        SetFlights([...flights].sort((a,b)=>b.flight.price.total.amount-a.flight.price.total.amount))
    }
    // Сортировка по времени
    let sortAscendingTime = () =>{
        SetFlights([...flights].sort((a,b)=>(a.flight.legs[0].duration+a.flight.legs[1].duration)-(b.flight.legs[0].duration+b.flight.legs[1].duration)))
    }
    // Сортировка по пересадкам
    let sortTransferOne = () => {
        SetFlights(y.filter(elem => elem.flight.legs[0].segments.length === 2))
    }
    let sortTransferZero = () => {
        SetFlights(x.filter(elem => elem.flight.legs[0].segments.length === 1))
    }

    let Tickets = flights.map((ticket,index) =>{
        let flight = ticket.flight
        return (
            <div className='ticket' key={index}>
                <Ticket 
                flight = {flight}/>    
                <TicketBack 
                flight = {flight}/>
            </div>
        )
    })
    return(
        <>  
            <Sorting
            sortAscendingPrice = {sortAscendingPrice}
            sortDescendingPrice = {sortDescendingPrice}
            sortAscendingTime = {sortAscendingTime}
            sortTransferOne = {sortTransferOne}
            sortTransferZero = {sortTransferZero}
            />
            {Tickets}
        </>
    )
    }










    






