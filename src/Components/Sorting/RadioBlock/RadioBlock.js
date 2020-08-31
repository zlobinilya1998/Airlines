import React from 'react'
import '../Sorting.css'



export default function RadioBlock({sortAscendingPrice,sortDescendingPrice,sortAscendingTime}){
    return(
        <div className='radio_block'>
            <form>
                <strong style={{color:'rgb(128, 227, 180)'}}>Сортировать</strong>
                <div className='radio_div'>
                    <div className='label'>
                        <input onChange={()=>sortAscendingPrice()} type='radio' name='sorting'></input>
                        <label> &nbsp;- по возрастанию цены</label>
                    </div>
                    <div className='label'>
                        <input onChange={()=>sortDescendingPrice()} type='radio' name='sorting'></input>
                        <label>&nbsp;- по убыванию цены</label>
                    </div>
                    <div className='label'>
                        <input onChange={()=>sortAscendingTime()} type='radio' name='sorting'></input>
                        <label>&nbsp;- по времени в пути</label>
                    </div>
                </div>
            </form>
        </div>
    )
}