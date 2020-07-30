import React from 'react';
import data from '../../flights.json'
import Container from '../Flight/Container'
import './App.css';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            flights: data.result.flights,
            showTicket:false
        };
    }
    toogleTicket = () =>{
        this.setState({
            showTicket: !this.setState.showTicket
        })
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
    sortTransferZero = () => {
        this.setState({flights:this.state.flights.filter(flight => flight.flight.legs[0].segments.length === 1)})
    }
    sortTransferOne = () => {
        this.setState({flights:this.state.flights.filter(flight => flight.flight.legs[0].segments.length === 2)})
    }
    // 

    render(){
        let flightsList = this.state.flights.map((flightElement,index) =>{
            let Flight = flightElement.flight
            let Array = Flight.legs[0].segments[0]
            let arrivalDate = (new Date(Array.arrivalDate)).toString()
            let departureDate = (new Date(Array.departureDate)).toString() 
            // console.log(arrivalArray.arrivalAirport.caption)
            // console.log(typeof(arrivalArray))

            return (
                <Container
                key={index}
                // 
                price={Flight.price.total.amount}
                duration={Flight.legs[0].duration}
                // Отправление
                departureCity={Array.departureCity.caption}
                departureDate={departureDate}
                departureAirport={Array.departureAirport.caption}
                departureAirportUid={Array.departureAirport.uid}
                // Служба перевозки
                carrier={flightElement.flight.carrier.caption}
                // Пересадка
                obj={Flight.legs[0].segments}       
                // Прибытие
                arrivalCity={Array.arrivalCity.caption} 
                arrivalDate={arrivalDate}
                arrivalAirport={Array.arrivalAirport.caption}
                arrivalAirportUid={Array.arrivalAirport.uid}        
                />    
            )
        })
        return(
            <>  
                <div className='radio'>
                    <div className='radio_container'>
                        <div className='radio_block'>
                            <form>
                                <strong>Сортировать</strong>
                                <div>
                                    <div >
                                        <input onChange={this.sortAscendingPrice} type='radio' name='sorting'></input>
                                        <label> &nbsp;- по возрастанию цены</label>
                                    </div>
                                    <div>
                                        <input onChange={this.sortDescendingPrice} type='radio' name='sorting'></input>
                                        <label>&nbsp;- по убыванию цены</label>
                                    </div>
                                    <div>
                                        <input onChange={this.sortAscendingTime} type='radio' name='sorting'></input>
                                        <label>&nbsp;- по времени в пути</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <hr/>
                        <div className='radio_block'>
                            <form>
                                <strong>Фильтровать</strong>
                                <div>
                                    <div>
                                        <input onChange={this.sortTransferOne} type='radio' name='sorting'></input>
                                        <label>&nbsp;- одна пересадка</label>
                                    </div>
                                    <div>
                                        <input onChange={this.sortTransferZero} type='radio' name='sorting'></input>
                                        <label>&nbsp;- без пересадок</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <hr/>
                        <div className='radio_block'>
                            <form>
                                <strong>Цена</strong>
                                <div>
                                    <label>До &nbsp;</label>
                                    <input type='number' name='sorting' placeholder='150000' className="input" step='5000'></input>
                                </div>
                            </form>
                        </div>
                        <hr/>
                        <div className='radio_block'>
                            <form>
                                <strong>Авиакомпания</strong>
                                <div>
                                    <input type='radio' name='sorting'></input>
                                    <label>&nbsp;- LOT Polish Airlines</label>
                                </div>
                                <div>
                                    <input type='radio' name='sorting'></input>
                                    <label>&nbsp;- Аэрофлот</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='flightsList'>{flightsList}</div>
                </div>
            </>
        )
    }
}

export default Main
