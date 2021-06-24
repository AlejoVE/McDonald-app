import React, { useState } from 'react';

export const SquareIcon = ({ icon }) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleClick = () => {

		setIsSelected(!isSelected);
	};
	return (
		<div onClick={handleClick} className={isSelected ? 'selected' : ''}>
			<i className={`icon fa fa-${icon}`}></i>
		</div>
	);
};
