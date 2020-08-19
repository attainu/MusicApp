import React, { Component } from 'react';
// import './GeoLocation.css'

class GeoLocation extends Component {
    state = {
        lat: undefined,
        lon: undefined,
        city: undefined,
        temperatureC: undefined,
        temperatureF: undefined,
        icon: undefined,
        errorMessage: undefined
    }

    getPosition =() => {
        return new Promise (function (resolve, reject){
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }

    getWeather = async (latitude, longitude) => {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a8ad87d117297e38c24b75a8ff1f512b&units=metric`)
        const data = await api_call.json();
        this.setState({
            lat: latitude,
            lon: longitude,
            city: data.name,
            temperatureC: Math.round(data.main.temp),
            temperatureF: Math.round(data.main.temp * 1.8 + 32),
            icon: data.weather[0].icon,
        })
    }

    componentDidMount() {
        this.getPosition()
         .then((position) => {
             this.getWeather(position.coords.latitude, position.coords.longitude)
         })
        .catch((err) => {
            this.setState({ errorMessage: err.message });
        });

        this.timeID = setInterval(
            () => this.getWeather(this.state.lat, this.state.lon),
            60000
        )
        }

        componentWillUnmount() {
            clearInterval(this.timeID)
        }

        render() {
            const { city, temperatureC, temperatureF, icon} = this.state
            if(city) {
                return (
                    <>
                    <hr/>
                    <br/>
                    <p className="container"><b>Weather</b></p>
                    <p className="header"><b>{city}</b></p>
                    <p>Temp : {temperatureC} &deg;C</p>
                    <p>Temp : {temperatureF} &deg;F</p>
                    {/* <img className='weather-icon' src={`http://opneweathermap.org/img/w/${icon}.png`} /> */}
                    </>
                )
            }
            else{
                return(
                    <div>Loading...</div>
                )
            }
        }
};

export default GeoLocation