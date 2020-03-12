import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

//custom CSS
import "./index.css"

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


class Semaforo extends React.Component {
    //constructor sets up the variable estado
    constructor(props) {
        super(props);
        this.state = { estadoRojo: 0,
                        estadoAmarillo:0,
                        estadoVerde:0 };
    }

    handleClick = (e) => {
        //modifies the variable estado and adds the class encendido that "turns on" the 
        if(this.state.estadoRojo===0){
            e.target.classList.add("encendido")
            this.setState({
                estadoRojo:1
            });
        }
        if(this.state.estadoRojo===1){
            e.target.classList.remove("encendido")
            this.setState({
                estadoRojo:0
            });
        }
        if(this.state.estadoVerde===0){
            e.target.classList.add("encendido")
            this.setState({
                estadoVerde:1
            });
        }
        if(this.state.estadoVerde===1){
            e.target.classList.remove("encendido")
            this.setState({
                estadoVerde:0
            });
        }
        if(this.state.estadoAmarillo===0){
            e.target.classList.add("encendido")
            this.setState({
                estadoAmarillo:1
            });
        }
        if(this.state.estadoAmarillo===1){
            e.target.classList.remove("encendido")
            this.setState({
                estadoAmarillo:0
            });
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row p-2">
                    <div className="col plush rounded-circle" id="roja" onClick={this.handleClick}> 
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col plush rounded-circle" id="amarilla"  onClick={this.handleClick}>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col plush rounded-circle" id="verde"  onClick={this.handleClick}>
                    </div>
                </div>
            </div >
        )
    }
}

ReactDOM.render(<Semaforo />, document.querySelector("#root"))