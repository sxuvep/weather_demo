import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Title = () => {
	return (
		<div>
			<h1 className="title-container__title">Weather Finder</h1>
			<h3 className="title-container__subtitle">
				Find out temperature, conditions and more...
			</h3>
		</div>
	);
};

export default Title;
