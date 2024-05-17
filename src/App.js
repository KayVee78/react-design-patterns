import { withUser } from "./withUser";
import { UserInfo } from "./UserInfo";

const UserInfoWithLoader = withUser(UserInfo, "234");

function App() {
  return <UserInfoWithLoader />;
}

export default App;
