import React, { useEffect, useState } from "react";

const Time = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const tick = () => {
		setTime(new Date().toLocaleTimeString());
	};

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);

		return () => {
			clearInterval(timerID);
		};
	}, [time]);

	return <span className="dark-cyan">{time}</span>;
};

export default Time;
