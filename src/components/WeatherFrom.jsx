import React from 'react';
import WeatherDetails from './WeatherDetails';

class WeatherForm extends React.Component {
	render() {
		return (
			<>
				<form onSubmit={this.props.onWeatherLoad}>
					<input type="text" name="city" placeholder="City" />
					<input type="text" name="country" placeholder="Country" />
					<button>Get Weather</button>
				</form>
				{this.props.weatherInfo.temperature != undefined && (
					<WeatherDetails weatherInfo={this.props.weatherInfo} />
				)}
			</>
		);
	}
}

export default WeatherForm;
