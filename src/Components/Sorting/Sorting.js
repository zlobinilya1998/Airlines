import React from 'react'
import './Sorting.css'
import { RadioBlock, RadioBlockSecond } from '../components'



function Sort(props){
        return(
            <div className='radio_container'>
                <RadioBlock
                sortAscendingPrice={props.sortAscendingPrice}
                sortDescendingPrice={props.sortDescendingPrice}
                sortAscendingTime={props.sortAscendingTime}
                />
                {/* <hr className='visible'/> */}
                <hr className='hidden'/>
                {/* <RadioBlockSecond
                sortTransferOne={props.sortTransferOne}
                sortTransferZero={props.sortTransferZero}
                /> */}
            </div>
        )
}

export default Sort
