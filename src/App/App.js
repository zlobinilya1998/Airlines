import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return (
    <div className="container">
      <div className='radio_container'>
        <div className='radio_block'>
          <form style={{textAlign:'start'}}>
            <p><strong>Сортировать</strong></p>
            <div >
              <div>
                <input type='radio' name='sorting'></input>
                <label>&nbsp;- по возрастанию цены</label>
              </div>
              <div>
                <input type='radio' name='sorting'></input>
                <label>&nbsp;- по убыванию цены</label>
              </div>
              <div>
                <input type='radio' name='sorting'></input>
                <label>&nbsp;- по времени в пути</label>
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
                <label>&nbsp;- одна пересадка</label>
              </div>
              <div>
                <input type='checkbox' name='sorting'></input>
                <label>&nbsp;- без пересадок</label>
              </div>
            </div>
          </form>
        </div>
        <div className='radio_block'>
          <form>
            <p><strong>Цена</strong></p>
            <div>
              <div>
                <label>От &nbsp;</label>
                <input type='number' name='sorting' placeholder='0' className="input"></input>
              </div>
              <div>
                <label>До &nbsp;</label>
                <input type='number' name='sorting' placeholder='10000' className="input"></input>
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
                <label>&nbsp;- LOT Polish Airlines</label>
              </div>
              <div>
                <input type='checkbox' name='sorting'></input>
                <label>&nbsp;- Аэрофлот</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}
}

export default App;
