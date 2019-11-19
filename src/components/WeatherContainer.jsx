import React from 'react';
import WeatherForm from './WeatherFrom';
import WeatherDetails from './WeatherDetails';

const Api_Key = '8d2de98e089f1c28e1a22fc19a24ef04';
class WeatherContainer extends React.Component {
	state = {
		data: {
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: undefined,
		},
	};
	onWeatherLoad = async e => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
		);
		const response = await api_call.json();

		console.log(response);

		if (response != null) {
			this.setState(
				{
					data: {
						temperature: response.main.temp,
						city: response.name,
						country: response.sys.country,
						humidity: response.main.humidity,
						description: response.weather[0].description,
						error: '',
					},
				},
				console.log(this.state.data)
			);
		} else {
			this.setState({
				data: {
					error: 'Invalid Inputs!!',
				},
			});
		}
	};
	render() {
		return (
			<>
				<WeatherForm
					onWeatherLoad={this.onWeatherLoad}
					weatherInfo={this.state.data}
				/>
			</>
		);
	}
}

export default WeatherContainer;
