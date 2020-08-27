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
    

    render(){
        let flightsList = this.state.flights.map((flightElement,index) =>{
            let flight = flightElement.flight
            return (
                <Ticket
                key = {index}
                flight = {flight}
                pop = {() => this.sortAscendingPrice}
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
