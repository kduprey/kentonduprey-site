const Input = ({ error, textArea, classes, ...args }) => {
	const inputClasses =
		"ml-2 mt-2 bg-gray-100 border-transparent rounded focus:text-black transition ease-in focus:bg-white focus:border-gray-500 dark:bg-black dark:border dark:border-gray-300 dark:text-white " +
		classes +
		(textArea
			? " w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 "
			: " w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 ") +
		(error ? " border-red-500" : "");

	if (textArea) {
		return <textarea rows="3" className={inputClasses} {...args} />;
	} else {
		return <input className={inputClasses} {...args} />;
	}
};

export default Input;
