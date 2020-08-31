import React from 'react'
import '../Sorting.css'

export default function RadioBlockSecond({sortTransferOne,sortTransferZero}){
    return(
        <div className='radio_block'>
            <form>
                
                <strong style={{color:'rgb(128, 227, 180)'}}>Фильтровать</strong>
                <div className='radio_div'>
                    <div className='label'>
                        <input onChange={()=>sortTransferOne()} type='radio' name='sorting'></input>
                        <label>&nbsp;- одна пересадка</label>
                    </div>
                    <div className='label'>
                        <input onChange={()=>sortTransferZero()} type='radio' name='sorting'></input>
                        <label>&nbsp;- без пересадок</label>
                    </div>
                </div>
            </form>
        </div>
    )
}