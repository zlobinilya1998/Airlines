import React from 'react';
import data from '../../flights.json'
import Ticket from './Ticket/Ticket'
import './main.css';



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
    toggleHandler = () => {
        this.setState({
            show: !this.state.show
        })
    }
    

    render(){
        let flightsList = this.state.flights.map((flightElement,index) =>{
            let Flight = flightElement.flight
            let Array = Flight.legs[0].segments[0]
            let arrivalDate = (new Date(Array.arrivalDate)).toString()
            let departureDate = (new Date(Array.departureDate)).toString() 

            return (
                <Ticket
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
                                <strong style={{color:'turquoise'}}>Сортировать</strong>
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
                                <strong style={{color:'turquoise'}}>Фильтровать</strong>
                                <div>
                                    <div>
                                        <input onChange={this.sortTransferOne} type='radio' name='sorting'></input>
                                        <label>&nbsp;- одна пересадка</label>
                                    </div>
                                    <div>
                                        <input onChange={this.sortTransferZero} type='radio' name='sorting'></input>
                                        <label>&nbsp;- без пересадок</label>
                                    </div>
                                    <button onClick={this.toggleHandler} className='' style={{display:'inline-block',width:'25vh',height:'4vh',marginTop:'2vh'}} >Скрыть билеты</button>
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
