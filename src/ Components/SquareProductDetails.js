import React from 'react';

export const SquareProductDetails = ({ title, icon, content }) => {
	return (
		<div>
			<h6>{title}</h6>
			<label>
				<i className={`fa fa-${icon}`}>{` ${content}`}</i>
			</label>
		</div>
	);
};
