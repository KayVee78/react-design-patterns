import { SplitScreen } from "./SplitScreen";

// left prop of SplitScreen
const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
};

// right prop of SplitScreen
const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: "blue" }}>Right!</h1>;
};

// App is the main functional component which is used to render other components
function App() {
  return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />;
}

export default App;
