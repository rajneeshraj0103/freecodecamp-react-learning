import MyComponent from "./MyComponent"

const App = () => {
  return <div>
    <MyComponent bgColor = "Yellow" height = {120}>
      hello!!!
    </MyComponent>
    <MyComponent bgColor = "Lavender" height = {60}>
      goodbye!
    </MyComponent>
  </div>
};

export default App;

