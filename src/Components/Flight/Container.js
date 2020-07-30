import React from 'react'
import '../Flight/Container.css'




export default props => (
    <>
        <div className='main'>
            <div className="footer">
                <div className='price'>
                    {props.price} &#8381;
                </div>
                <p className='passenger'>
                    Стоимость для одного взрослого пассажира
                </p>
            </div>
            <p className="route">
                {props.departureCity}, {props.departureAirport}<span style={{color:'blue'}}> ({props.departureAirportUid}) &#8594;</span> {props.arrivalCity}, {props.arrivalAirport}<span style={{color:'blue'}}> ({props.arrivalAirportUid})</span>
            </p>
            <div className='time'>
                <div className="time_block">
                    <div>
                        <strong>
                            {props.departureDate.slice(15, -40)}
                        </strong>
                    </div>
                    <div>
                        <span>
                            {props.departureDate.slice(4, -50)}  
                        </span>
                    </div>  
                </div>
                <div className="time_duration">
                    <div>
                        <span role='img' aria-label="img">
                            &#8986;
                        </span>
                        <strong>
                            {Math.floor(props.duration/60)} ч {props.duration % 60} мин
                        </strong>
                    </div>
                </div>
                <div className="time_block">
                    <div>
                        <span>
                            {props.arrivalDate.slice(4, -50)}
                        </span>
                    </div>  
                    <div>
                        <strong>
                            {props.arrivalDate.slice(15, -40)}
                        </strong>
                    </div>
                </div>
            </div>
            <h1 className='transfer'>
                <span>
                    {props.obj.length-1 ? props.obj.length-1 + ' Пересадка': 'Без пересадок' }
                </span>
            </h1>
            <p className='carrier'>
                Рейс выполняет : <strong>{props.carrier}</strong>
            </p>
            <hr style={{height:'.1px'}}/>

          
            <button className='main_btn'>
                Выбрать
            </button>
        </div>
    </>
)