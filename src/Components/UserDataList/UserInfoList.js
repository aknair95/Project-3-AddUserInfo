
import "./UserInfoList.css";
import Card from "../UI/card";

const UserInfoList=(props) =>{
    return(
         <Card classname="users">
            <ul >
                {  
                 props.usersInfo.map((element) =>(
                 <li>
                  { `Name- ${element.userName} Age- ${element.userAge}`}
                 </li>
                ))}
            </ul> 
        </Card> 
    )
}

export default UserInfoList;