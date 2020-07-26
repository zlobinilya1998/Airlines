import React from 'react';
import data from '../flights.json'
import Container from '../Flight/Container'
import '../App/App.css';

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
    // Сортировка по перевозщику
    // sortByCarrier = () => {
        // this.setState({flights:this.state.flights.filter(flight => flight.flight.legs[0].segments[1].operatingAirline.caption ==                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               )})
    //
    
    render(){
        let flightsList = this.state.flights.map((flightElement,index) =>{
            let Array = flightElement.flight.legs[0].segments[0]
            let ArrayReturn = flightElement.flight.legs[1].segments[0]
            // console.log(ArrayReturn.departureCity.caption)
            return (
                <Container
                key={index}
                // 
                price={flightElement.flight.price.total.amount}
                duration={flightElement.flight.legs[0].duration}
                // Отправление
                departureCity={Array.departureCity.caption}
                departureDate={Array.departureDate}
                departureAirport={Array.departureAirport.caption}
                departureAirportUid={Array.departureAirport.uid}
                // Служба перевозки
                carrier={flightElement.flight.carrier.caption}
                // Пересадка
                obj={flightElement.flight.legs[0].segments}
                // Прибытие
                arrivalCity={Array.arrivalCity.caption} 
                arrivalDate={Array.arrivalDate}
                arrivalAirport={Array.arrivalAirport.caption}
                arrivalAirportUid={Array.arrivalAirport.uid}        
                // Обратный маршрут
                // departureCityReturn={ArrayReturn.departureCity.caption ? ArrayReturn.departureCity.caption : '' }
                // departureDateReturn={Array.departureDate}
                // departureAirportReturn={Array.departureAirport.caption}
                // departureAirportUidReturn={Array.departureAirport.uid}

                />    
            )
        })
        return(
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
                        <div className='radio_block'>
                            <form>
                                <strong>Цена</strong>
                                <div>
                                    <label>От &nbsp;</label>
                                    <input type='number' name='sorting' placeholder='0' className="input" step='5000'></input>
                                </div>
                                <div>
                                    <label>До &nbsp;</label>
                                    <input type='number' name='sorting' placeholder='150000' className="input" step='5000'></input>
                                </div>
                            </form>
                        </div>
                        <div className='radio_block'>
                            <form>
                                <strong>Авиакомпания</strong>
                                <div>
                                    <input type='checkbox' name='sorting'></input>
                                    <label>&nbsp;- LOT Polish Airlines</label>
                                </div>
                                <div>
                                    <input onChange={this.sortByCarrier} type='checkbox' name='sorting'></input>
                                    <label>&nbsp;- Аэрофлот</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='flightsList'>{flightsList}</div>
                </div>
        )
    }
}

export default Main
