
import { useState } from "react";
import "./AddUserForm.css";
import Card from "../UI/card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/wrapper";

const AddUserForm=(props) =>{
 
    const [name,setName]= useState("");
    const [age,setAge]= useState("");
    const [invalid,setInvalid]= useState();

    const OnNameChangeHandler=(e) =>{
       setName(e.target.value);  
    }

    const OnAgeChangeHandler=(e1) =>{
        setAge(e1.target.value); 
    }

    const OnSubmitHandler=(e2) =>{
        e2.preventDefault();
        if(name.trim().length===0 || age.trim().length===0){
            setInvalid({
                title: "INVALID INPUTS",
                message: "Fields cannot be empty. Please enter Name & Age !!!"
            });
            return;
        }

        if(age<1){
            setInvalid({
                title: "INVALID AGE",
                message: "Enter a valid Age(>0) !!!"
            });
            return;
        }
        props.userInfoObj(name,age);
        setAge("");
        setName("");
    }

    const onInvalidHandler=() =>{
        setInvalid(null);
    }
        return(
            <Wrapper>
                {invalid && <ErrorModal title={invalid.title} message={invalid.message} onConfirm={onInvalidHandler}/> }      
                <Card classname="form-control">
                    <form onSubmit={OnSubmitHandler}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" onChange={OnNameChangeHandler} value={name}/>
                        <label id="age">Age(Years)</label>
                        <input id="age" type="number" onChange={OnAgeChangeHandler} value={age}/>
                        <button type="submit">ADD USER</button>
                    </form>
                </Card>
            </Wrapper>   
    )
}

export default AddUserForm;