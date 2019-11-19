import React from 'react';
import WeatherDetail from './WeatherDetail';

class WeatherDetails extends React.Component {
	state = {
		temp: this.getTempInCelsius(this.props.weatherInfo.temperature),
	};

	getTempInCelsius(tempInKelvin) {
		return Math.floor((tempInKelvin - 273) * (9 / 5) + 32);
	}

	render() {
		const { country, city, humidity, description } = this.props.weatherInfo;
		return (
			<div className="weather__info">
				{city && country && (
					<WeatherDetail title="Location">
						{city},{country}
					</WeatherDetail>
				)}
				{this.state.temp && (
					<WeatherDetail title="Temperature">
						{this.state.temp} deg C
					</WeatherDetail>
				)}
				{humidity && (
					<WeatherDetail title="Humidity">{humidity}</WeatherDetail>
				)}
				{description && (
					<WeatherDetail title="Description">{description}</WeatherDetail>
				)}
			</div>
		);
	}
}

export default WeatherDetails;
