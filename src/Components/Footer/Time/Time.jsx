import React from 'react'
import './Time.css'


export default function Time(){
  let [date,SetDate] = React.useState(new Date().toLocaleTimeString());  

  function tick(){
    SetDate(new Date().toLocaleTimeString())
  }
  setInterval(tick,1000)
  
  return (
    <div className='time'>
      <h2 className='localTime'>
        Локальное время&nbsp;<span className='spanFooter'>{date}</span>
      </h2>
    </div>
  );
}
    
