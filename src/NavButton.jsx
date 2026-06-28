const NavButton = (props) => {
  const { icon, onClick, show} = props;

  if(show === false) {
    return null;
  }
  
  return (
    <button 
        className="bg-green-400 text-green-200 rounded-md"
        onClick={onClick}>
      <i className={`fa-sharp fa-solid m-2 text-3xl ${icon}`}></i>
    </button>
  );
};

export default NavButton;