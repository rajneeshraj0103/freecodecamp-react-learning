const Box = (props) =>{
  const {label, bgColor, textColor, large} = props;
  console.log(large)
  return(
    <div style={{
      background : bgColor, 
      color : textColor, 
      fontSize: large ? '40px' : '12px'
    }}> 
      {label} 
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Box 
        label="My name is Rajneesh" 
        bgColor = "CornflowerBlue" 
        textColor = "White" 
        large = {true}/>
      <Box 
        label="Another one" 
        bgColor = "lavender" 
        textColor = "Purple"
        large = {false} />
        <Box 
        label="Green Stuff" 
        bgColor = "Green" 
        textColor = "White"/>
    </div>
  );
};

export default App;

