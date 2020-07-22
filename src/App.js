import React from 'react';
import './App.css';

function App() {
  return (
   <div className="container">
     <div className='radio_container'>
      <div className='radio_block'>
        <form style={{textAlign:'start'}}>
          <p><strong>Сортировать</strong></p>
          <div >
            <div>
              <input type='radio' name='sorting'></input>
              <label>- по возрастанию цены</label>
            </div>
            <div>
              <input type='radio' name='sorting'></input>
              <label>- по убыванию цены</label>
            </div>
            <div>
              <input type='radio' name='sorting'></input>
              <label>- по времени в пути</label>
            </div>
          </div>
        </form>
      </div>
      <div className='radio_block'>
        <form>
          <p><strong>Фильтровать</strong></p>
          <div>
            <div>
              <input type='checkbox' name='sorting'></input>
              <label>- одна пересадка</label>
            </div>
            <div>
              <input type='checkbox' name='sorting'></input>
              <label>- без пересадок</label>
            </div>
          </div>
        </form>
      </div>
      <div className='radio_block'>
        <form>
          <p><strong>Цена</strong></p>
          <div>
            <div>
              <label>От </label>
              <input type='number' name='sorting' placeholder='0'></input>
            </div>
            <div>
              <label>До </label>
              <input type='number' name='sorting' placeholder='10000'></input>
            </div>
          </div>
        </form>
      </div>
      <div className='radio_block'>
        <form>
          <p><strong>Авиакомпания</strong></p>
          <div>
            <div>
              <input type='checkbox' name='sorting'></input>
              <label>- LOT Polish Airlines</label>
            </div>
            <div>
              <input type='checkbox' name='sorting'></input>
              <label>- Аэрофлот</label>
            </div>
          </div>
        </form>
      </div>
     </div>
   </div>
  );
}

export default App;
