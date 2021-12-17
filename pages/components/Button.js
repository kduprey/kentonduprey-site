const Button = ({ className, children, ...attributes }) => {
	return (
		<button
			className={
				className +
				" flex flex-row justify-evenly m-1 font-display items-center py-1 px-3 focus:outline-none rounded text-base bg-black text-white hover:bg-gray-800 transition ease-in dark:border-gray-300 dark:border"
			}
			{...attributes}
		>
			{children ? children : null}
		</button>
	);
};

export default Button;
