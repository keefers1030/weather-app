import React, {useState} from 'react'

const Icons = props => {
  state = {
    data: {
      weather: [
        {
          id: 300,
          main: "Drizzle",
          description: "light intensity drizzle",
          icon: "09d"
        }
      ]
    }
  };
  render() {
    const renderWeatherIcon = this.state.data.weather.map(item => {
      return <img src={`http://openweathermap.org/img/w/${item.icon}.png`} />;
    });
    return <div>{renderWeatherIcon}</div>;
  }
}
