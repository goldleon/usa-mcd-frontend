import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

import './mcdonaldsMaps.styles.scss';

import MapsMarker, {K_SIZE} from '../maps-marker/maps-marker.component';

const McDonaldsMaps = ({error, filteredStoresList, hoverKey}) => {
	const [mapsKey, setMapsKey] = useState({
		key: 'AIzaSyAk0kM9RhPJrAlO5uIqzn_Dh8IAxwaxBkY',
	});
	const [center, setCenter] = useState({
		lat: 41.850033,
		lng: -87.6500523,
	});
	const [zoom, setZoom] = useState(5);
	// useEffect(() => {
	// 	if (filteredStoresList.length > 0) {
	// 		setCenter({
	// 			lat: parseFloat(filteredStoresList[0][1]),
	// 			lng: parseFloat(filteredStoresList[0][0]),
	// 		});
	// 	}
	// }, [filteredStoresList]);
	return (
		<div className="maps">
			<GoogleMapReact
				apiKey={mapsKey.key}
				yesIWantToUseGoogleMapApiInternals
				hoverDistance={K_SIZE / 2}
				center={center}
				zoom={zoom}>
				{filteredStoresList.length > 0 &&
					filteredStoresList.map((store, index) => {
						return (
							<MapsMarker
								key={index}
								lat={parseFloat(store[1])}
								lng={parseFloat(store[0])}
								text="Mc"
								hover={hoverKey === index}
							/>
						);
					})}
			</GoogleMapReact>
			{error && <div className="errorMsg">{error.message}</div>}
		</div>
	);
};

export default McDonaldsMaps;
