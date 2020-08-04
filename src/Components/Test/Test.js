import React from 'react'
import './Test.css'

export default class Test extends React.Component{
    numbers = ['Прямые поставщики',2,3,4,2,4]
    render(){



        return(
            <ul style={{textDecoration:'none',width:'25vh'}}>
                {this.numbers.map((num, index) => (<li className="li" key={index}>{num}</li>))}
            </ul>
        )
    }
}