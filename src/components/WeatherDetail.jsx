import React from 'react';

const WeatherDetail = ({ title, children }) => {
	return (
		<p className="weather__key">
			{title}:<span className="weather__value">{children}</span>
		</p>
	);
};

export default WeatherDetail;
