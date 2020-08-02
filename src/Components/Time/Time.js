import React from 'react'
import './Time.css'


export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date().toLocaleTimeString()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

    render(){
      return (
        <div className='time'>
          <h2 className='d-flex justify-content-end localTime' style={{fontSize:'1rem',marginRight:'1vh'}}>Локальное время&nbsp;<span className='span'>{this.state.date}</span></h2>
        </div>
      );
    }
  }
    
