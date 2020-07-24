import React from 'react';
import data from '../flights.json'
import Container from '../Flight/Container'

class Main extends React.Component {
        state = {
            flights : data.result.flights,
    }
    render(){
        let flightsList = this.state.flights.map((flightElement,index) =>{
            return (
                <Container
                key={index}
                price={flightElement.flight.price.total.amount}
                duration={flightElement.flight.legs[0].duration}
                // Пересадка
                transfer={flightElement.flight.legs.length-1}
                // Отправление
                departureCity={flightElement.flight.legs[0].segments[0].departureCity.caption}
                departureDate={flightElement.flight.legs[0].segments[0].departureDate}
                departureAirport={flightElement.flight.legs[0].segments[0].departureAirport.caption}
                departureAirportUid={flightElement.flight.legs[0].segments[0].departureAirport.uid}
                carrier={flightElement.flight.carrier.caption}
                // Прибытие
                arrivalCity={flightElement.flight.legs[0].segments[0].arrivalCity.caption}
                arrivalDate={flightElement.flight.legs[0].segments[0].arrivalDate}
                arrivalAirport={flightElement.flight.legs[0].segments[0].arrivalAirport.caption}
                arrivalAirportUid={flightElement.flight.legs[0].segments[0].arrivalAirport.uid}
                />    
            )
        })
        return(
            <div>
                {flightsList}
            </div>
        )
    }
}

export default Main
