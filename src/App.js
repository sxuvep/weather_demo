import React from 'react';
import './App2.css';
import WeatherContainer from './components/WeatherContainer';
import Title from './components/Title';
import { Row, Col } from 'react-bootstrap';

function App() {
	return (
		<div className="wrapper">
			<div className="main">
				<div className="container">
					<Row>
						<Col sm={5} className="title-container">
							<Title />
						</Col>
						<Col sm={7} className="form-container">
							<WeatherContainer />
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default App;
