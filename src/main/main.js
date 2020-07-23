import React from 'react';
import './main.css';
import data from '../flights.json'
import Flight from '../flights.js';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        flights : data.result.flights
    }

    componentDidMount(){
        console.log(this.state)
    }
    render(){
        let flightsList = null
            flightsList = this.state.flights.map((flightElement,index) =>{
                console.log(flightElement.flight.price.total.amount)
                return (
                    <Flight
                        key={index}
                        price={flightElement.flight.price.total.amount}
                        duration={flightElement.flight.legs[0].duration}
                    />
                        
                )
            })
    
        return(
            <div>{flightsList}</div>



            // <div className='main'>
            //     <div>
            //         <div className="main_footer">
            //         </div>
            //         <p>МАРШРУТ</p>
            //         <p>Рейс выполняет : </p>
            //         <div className='main_time'>
            //             <div className="main_time_block">
            //                 <div><strong>Time</strong></div>
            //                 <div><span>Date</span></div>  
            //             </div>
            //             <div className="main_time_block">
            //                 <div><strong>Time</strong></div>
            //                 <div><span>Date</span></div>  
            //             </div>
            //             <div className="main_time_block">
            //                 <div><strong>Time</strong></div>
            //                 <div><span>Date</span></div>  
            //             </div>
            //         </div>
            //         <hr/>
            //         <button className='main_btn'>Выбрать</button>
            //     </div>
            // </div>
        )
    }
}

export default Main
