const Button = ({ text, children }) => {
	return (
		<button className="m-1 font-display  text-teal-600 items-center bg-teal-100 border-0 py-1 px-3 focus:outline-none hover:bg-teal-200 rounded text-base mt-4 md:mt-0">
			{text}
			{children}
		</button>
	);
};

export default Button;
