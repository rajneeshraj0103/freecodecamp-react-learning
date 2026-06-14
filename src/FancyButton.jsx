const FancyButton = (props) =>{
    const {children, large} = props; 

    const largeStyles = large ? "text-3xl rounded-full" : "text-base rounded-md";

    return <button className={`bg-blue-200 border-2  border-blue-700 text-blue-700 px-10
    py-2 rounded-md m-4 cursor-pointer ${ largeStyles}`}>
        {children}
        </button>
};

export default FancyButton;