import { withUser } from "./withUser";
import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";

const UserInfoWithLoader = withUser(UserInfo, "234");

function App() {
  // return <UserInfoWithLoader />;
  return <UserInfoForm />;
}

export default App;
