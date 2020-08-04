import React from 'react'

export default class Error404 extends React.Component{
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <p style={{
                color:'red',
                textAlign:'center',
                marginTop:'35vh',
                fontSize:'2.5rem'}}
                >
                Ошибка 404. Страница не найдена
                </p>
                <hr style={{height:'.2vh',width:'100%',margin:'0'}} />
            </div>
        )
    }
} 