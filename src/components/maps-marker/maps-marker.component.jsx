import React from 'react';

export const K_SIZE = 20;

const markerStyles = {
	position: 'absolute',
	width: K_SIZE,
	height: K_SIZE,
	left: -K_SIZE / 2,
	top: -K_SIZE / 2,

	border: '5px solid #f44336',
	borderRadius: K_SIZE,
	backgroundColor: 'white',
	textAlign: 'center',
	color: '#3f51b5',
	fontSize: 16,
	fontWeight: 'bold',
	padding: 4,
};

const MapsMarker = ({text}) => {
	return <div style={markerStyles}>{text}</div>;
};

export default MapsMarker;
