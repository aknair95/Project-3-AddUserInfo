
import { useState } from 'react';
import AddUserForm from "./Components/UserDataForm/AddUserForm";
import UserInfoList from "./Components/UserDataList/UserInfoList";

function App() {
  
  const [usersList,setUsersList]= useState([]);

  const userInfoObjHandler=(name,age) =>{
    setUsersList((prevUsersList) =>{
      return [ ...prevUsersList,{userName:name,userAge:age,id:Math.random()}];
    });
  }

  return (
    <>
      <AddUserForm userInfoObj={userInfoObjHandler}/>
      <UserInfoList usersInfo={usersList}/>
    </>
  );
}

export default App;
