const Message = (props) =>{
  const {text, bgColor} = props;
  return(
    <div style={{background:bgColor}}>{text}</div>
  )
}


const App = () => {
  return (
    <div>
    <Message text="This is my first prop" bgColor = "lavender" />
    <Message text="Hi!!!" bgColor = "CornflowerBlue" />
    <Message text="Bye!!!" bgColor = "Beige" />
    </div>
  );
};

export default App;

