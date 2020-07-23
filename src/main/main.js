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
                <Flight
                key={index}
                price={flightElement.flight.price.total.amount}
                duration={flightElement.flight.legs[0].duration}
                />    
            )
        })
        return(
            <div>{flightsList}
            </div>
        )
    }
}

export default Main
