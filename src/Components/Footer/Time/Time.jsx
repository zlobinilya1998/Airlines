import React from 'react'
import './Time.css'


export default function Time(){
  let [date,SetDate] = React.useState(new Date().toLocaleTimeString());  
  let day = new Date().toLocaleDateString([],{month:'long',day:'numeric'})

  function tick(){
    SetDate(new Date().toLocaleTimeString())
  }
  setInterval(tick,1000)
  
  
  return (
    <div className='time'>
      <h2 className='localTime'>
      {day}<span className='spanFooter'>&nbsp;{date}</span>
      </h2>
    </div>
  );
}
    
