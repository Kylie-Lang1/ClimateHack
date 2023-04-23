import React, { useEffect, useState } from 'react';

export const Slider = ({ score }) => {
	const [value, setValue] = useState(0);
	
	useEffect(() => {
		setValue(score);
	}, [score]);
  
	return (
	  <div>
		<input
		  type="range"
		  min="-15"
		  max="15"
		  value={value}
		  disabled
		/>
		{` : ${value}`}
	  </div>
	);
}

export default Slider