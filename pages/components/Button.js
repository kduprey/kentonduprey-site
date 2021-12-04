const Button = ({ className, children, ...attributes }) => {
	return (
		<button
			className={
				className +
				" flex flex-row justify-evenly m-1 font-display items-center border-0 py-1 px-3 focus:outline-none rounded text-base bg-black text-white hover:bg-gray-700 transition ease-in"
			}
			{...attributes}
		>
			{children ? children : null}
		</button>
	);
};

export default Button;
