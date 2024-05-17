import { UserInfo } from "./UserInfo";
import { printProps } from "./printProps";

//How we are gonna use printProps is by creating a wrapper around UserInfo component
const UserInfoWrapped = printProps(UserInfo);

function App() {
  return <UserInfoWrapped a={1} b="Hello" c={{ name: "Shaun" }} />;
}

export default App;
