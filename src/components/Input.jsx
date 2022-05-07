const Input = ({ className, ...props }) => {
    return (<input 
        {...props}
        className={`${className} shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} 
    />)
};

export default Input;