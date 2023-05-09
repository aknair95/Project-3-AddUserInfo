
import { useState } from 'react';
import AddUserForm from "./Components/UserDataForm/AddUserForm";
import UserInfoList from "./Components/UserDataList/UserInfoList";

function App() {
  
  const [usersList,setUsersList]= useState([]);

  const userInfoObjHandler=(name,age) =>{
    setUsersList((prevUsersList) =>{
      return [ ...prevUsersList,{userName:name,userAge:age,key:Math.random()}];
    });
  }

  return (
    <div>
      <AddUserForm userInfoObj={userInfoObjHandler}/>
      <UserInfoList usersInfo={usersList}/>
    </div>
  );
}

export default App;
