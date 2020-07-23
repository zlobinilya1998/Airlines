import React from 'react';


export default props => (
  <div>
    <h3>Цена: {props.price}</h3>
    <p>Длительность: {Math.floor(props.duration/60)} ч {props.duration % 60} мин</p>
  </div>
)