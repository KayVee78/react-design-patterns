import { SplitScreen } from "./SplitScreen";

// left prop of SplitScreen
const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

// right prop of SplitScreen
const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "blue" }}>{message}!</h1>;
};

// App is the main functional component which is used to render other components
function App() {
  return (
    <>
      {/* <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={3}
      /> */}

      {/* Passing left and right hand components as children */}
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Kithmi" />
        <RightHandComponent message="Welcome to Hell" />
      </SplitScreen>
    </>
  );
}

export default App;
