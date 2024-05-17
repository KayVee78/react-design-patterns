// import { withEditableUser } from "./withEditableUser";
import { withEditableResource } from "./withEditableResource";

//Using withEditableUser HOC within a regular component
// export const UserInfoForm = withEditableUser(
//   ({ user, onChangeUser, onSaveUser, onResetUser }) => {
//     const { name, age, hairColor } = user || {};

//     return user ? (
//       <>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => onChangeUser({ name: e.target.value })}
//         />
//         <label>Age:</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
//         />
//         <label>Hair Color:</label>
//         <input
//           type="text"
//           value={hairColor}
//           onChange={(e) => onChangeUser({ hairColor: e.target.value })}
//         />
//         <button onClick={onResetUser}>Reset</button>
//         <button onClick={onSaveUser}>Save Changes</button>
//       </>
//     ) : (
//       <p>Loading...</p>
//     );
//   },
//   "123"
// );

//Using withEditableResource HOC within a regular component
export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
        <label>Hair Color:</label>
        <input
          type="text"
          value={hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save Changes</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "/users/123",
  "user"
);
