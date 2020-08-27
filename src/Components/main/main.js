import React from 'react';
import data from '../../flights.json'
import Ticket from './Ticket/Ticket'
import Sort from './Sort/Sort'



export default class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            flights: data.result.flights,
            x: data.result.flights,
            y: data.result.flights,
            show: true,
        };
    }
    // Сортировка по цене
    sortAscendingPrice = () =>{
        this.setState({flights:[...this.state.flights].sort((a,b)=>a.flight.price.total.amount-b.flight.price.total.amount)})
    }
    sortDescendingPrice = () =>{
        this.setState({flights:[...this.state.flights].sort((a,b)=>b.flight.price.total.amount-a.flight.price.total.amount)})
    }
    // Сортировка по времени
    sortAscendingTime = () =>{
        this.setState({flights:[...this.state.flights].sort((a,b)=>a.flight.legs[0].duration-b.flight.legs[0].duration)})
    }
    // Сортировка по пересадкам
    sortTransferOne = () => {
        this.setState({flights:this.state.y.filter(flight => flight.flight.legs[0].segments.length === 2)})
    }
    sortTransferZero = () => {
        this.setState({flights:this.state.x.filter(flight => flight.flight.legs[0].segments.length === 1)})
    }
    

    render(){
        let Tickets = this.state.flights.map((flightElement,index) =>{
            let flight = flightElement.flight
            return (
                <Ticket
                key = {index}
                flight = {flight}
                />    
            )
        })
        return(
            <>  
                <Sort
                sortAscendingPrice = {this.sortAscendingPrice}
                sortDescendingPrice = {this.sortDescendingPrice}
                sortAscendingTime = {this.sortAscendingTime}
                sortTransferOne = {this.sortTransferOne}
                sortTransferZero = {this.sortTransferZero}
                />
                <div>{Tickets}</div>
            </>
        )
    }
}









    






