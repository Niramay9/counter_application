import React, {Component} from "react";

class CounterClass extends Component{
    state = {
        number: 1,        
    }
    Increment(){
        this.setState({
            number: this.state.number + 1
        })
    }
    Decrement(){        
        this.setState({            
                number: this.state.number === 0 ?this.state.number : this.state.number - 1
        })
    }
    render(){
        return(
            <div style={{
                backgroundColor: 'palegoldenrod',
                padding: '20px 40px',
                margin: '3rem',
                border: '4px solid black',
                borderRadius: '30px'
            }}>
                <h2>Counter using class component: </h2>
                <p style={{fontSize: '2rem'}}>{this.state.number}</p>                
                <button style={{backgroundColor: 'green', color: 'whitesmoke', padding: '5px 25px', 
                borderRadius: '10px', fontSize: '1.5rem', marginRight: '10px'}} 
                onClick={() => this.Increment()}>+</button>
                <button style={{backgroundColor: 'red', color: 'whitesmoke', padding: '5px 25px', 
                borderRadius: '10px', fontSize: '1.5rem', marginLeft: '10px'}} 
                onClick={() => this.Decrement()}>-</button>
            </div>
        )
    }
}

export default CounterClass;