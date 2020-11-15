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

	return <div className="dark-cyan">{time}</div>;
};

export default Time;
