import React from 'react'
import './Sorting.css'


function Sort(props){
        return(
            <div className='radio'>
                <div className='radio_container'>
                    <div className='radio_block'>
                        <form>
                            <strong style={{color:'rgb(128, 227, 180)'}}>Сортировать</strong>
                            <div>
                                <div >
                                    <input onChange={props.sortAscendingPrice} type='radio' name='sorting'></input>
                                    <label> &nbsp;- по возрастанию цены</label>
                                </div>
                                <div>
                                    <input onChange={props.sortDescendingPrice} type='radio' name='sorting'></input>
                                    <label>&nbsp;- по убыванию цены</label>
                                </div>
                                <div>
                                    <input onChange={props.sortAscendingTime} type='radio' name='sorting'></input>
                                    <label>&nbsp;- по времени в пути</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <hr style={{borderBottom:`2px solid #000`}}/>
                    <div className='radio_block'>
                        <form>
                            <strong style={{color:'rgb(128, 227, 180)'}}>Фильтровать</strong>
                            <div>
                                <div>
                                    <input onChange={props.sortTransferOne} type='radio' name='sorting'></input>
                                    <label>&nbsp;- одна пересадка</label>
                                </div>
                                <div>
                                    <input onChange={props.sortTransferZero} type='radio' name='sorting'></input>
                                    <label>&nbsp;- без пересадок</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default Sort
