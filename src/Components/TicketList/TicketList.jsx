import React, { useState } from 'react';
import data from '../../flights.json'

import './TicketList.css'

import { Ticket, TicketBack, Sorting } from '../components'




export default function TicketList(){
    let [flights,SetFlights] = useState(data.result.flights)
    let [activeButton,SetActiveButton] = useState([])
    let x = data.result.flights
    let y = data.result.flights

    
    // Сортировка по цене
    let sortAscendingPrice = () =>{
        SetFlights((prevState)=>[...prevState].sort((a,b)=>a.flight.price.total.amount-b.flight.price.total.amount))
    }
    let sortDescendingPrice = () =>{
        SetFlights((prevState)=>[...prevState].sort((a,b)=>b.flight.price.total.amount-a.flight.price.total.amount))
    }
    // Сортировка по времени
    let sortAscendingTime = () =>{
        SetFlights((prevState)=>[...prevState].sort((a,b)=>(a.flight.legs[0].duration+a.flight.legs[1].duration)-(b.flight.legs[0].duration+b.flight.legs[1].duration)))
    }
    // Сортировка по пересадкам
    let sortTransferOne = () => {
        SetFlights(y.filter(elem => elem.flight.legs[0].segments.length === 2 && elem.flight.legs[1].segments.length === 2))
    }
    let sortTransferZero = () => {
        SetFlights(x.filter(elem => elem.flight.legs[0].segments.length === 1 && elem.flight.legs[1].segments.length === 1))
    }

    let Tickets = flights.map((ticket,index) =>{
        let flight = ticket.flight
        return (
            <>
            <div className={activeButton === index ? 'ticket hovered': 'ticket'} key={index}>
                <Ticket 
                flight = {flight}/>    
                <TicketBack 
                flight = {flight}
                sayHi = {()=> SetActiveButton(index)}
                />
            </div>
            </>
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










    






