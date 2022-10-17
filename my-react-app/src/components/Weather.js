import React, { Component } from "react"

import cold from '../assets/cold.png';
import mild from '../assets/mild.png';
import sunny from '../assets/sunny.png';



class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: '',
            tempType: 'c'
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&units=metric&APPID=d6c235e33f018b83b11f9af5335e3e63")
            .then(response => {
                return response.json()
            })
            .then(response => {
                //console.log(response);
                this.setState({
                    temp: response.main.temp
                    //temp: 20
                })
            });
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className="weather-container">
                

                {this.state.temp  < 10 ?
                    <img alt='' height='50' src={cold} />
                :
                this.state.temp  < 20 ?
                    <img alt='' height='50' src={mild} />
                :
                    <img alt='' height='50' src={sunny} />
                }
                

                {this.state.tempType === 'c' ?
                   <div>
                    <p><b>Temp: </b>{this.state.temp}</p>

                    <button onClick={() => this.setState({ tempType: 'f' })}>Change to °F</button> 
                    </div>
                :
                <div>
                    <p><b>Temp: </b>{this.state.temp * 1.8 +32}</p>

                    <button onClick={() => this.setState({ tempType: 'c' })}>Change to °C</button> 
                </div>

                }
            </div>
        )
    }
}

export default Weather;
