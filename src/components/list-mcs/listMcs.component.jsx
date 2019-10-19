import React from 'react';

const ListMcs = ({mcStores, error}) => {
	return (
		<div className="mcStores">
			<h5>List of USA McDonalds </h5>
			{mcStores.length > 0 && !error ? (
				mcStores.map((item, index) => {
					return (
						<span className="mcStore-item" key={index}>
							{item[2]} - {item[4]} - {item[6]}
						</span>
					);
				})
			) : mcStores.length === 0 && !error ? (
				<span>Loading ...</span>
			) : (
				<h5>No Data</h5>
			)}
		</div>
	);
};

export default ListMcs;
