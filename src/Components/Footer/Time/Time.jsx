import React , { useState } from 'react'
import './Time.css'


export default function Time(){

  // eslint-disable-next-line
  let [date,SetDate] = useState(new Date().toLocaleTimeString()); 


  return (
    <div className='time'>
      <h2 className='localTime'>
        Локальное время&nbsp;<span className='spanFooter'>{date}</span>
      </h2>
    </div>
  );
}
    
