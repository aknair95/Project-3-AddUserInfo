
import { useState, useRef} from "react";            //importing react libraries
import "./AddUserForm.css";
import Card from "../UI/card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/wrapper";

const AddUserForm=(props) =>{
 
    // const [name,setName]= useState("");              // using states
    // const [age,setAge]= useState("");
    const [invalid,setInvalid]= useState();

    const nameRef= useRef();                            // using ref's
    const ageRef= useRef();

    // const OnNameChangeHandler=(e) =>{                // event handler to fetch input value when using state
    //    setName(e.target.value);  
    // }

    // const OnAgeChangeHandler=(e1) =>{               
    //     setAge(e1.target.value); 
    // }

    const OnSubmitHandler=(e2) =>{
        e2.preventDefault();
        const enteredName=nameRef.current.value;
        const enteredAge=ageRef.current.value;

        if(enteredName.trim().length===0 || enteredAge.trim().length===0){
            setInvalid({
                title: "INVALID INPUTS",
                message: "Fields cannot be empty. Please enter Name & Age !!!"
            });
            return;
        }

        if(enteredAge<1){
            setInvalid({
                title: "INVALID AGE",
                message: "Enter a valid Age(>0) !!!"
            });
            return;
        }
        props.userInfoObj(enteredName,enteredAge);
        nameRef.current.value="";
        ageRef.current.value="";
    //     setAge("");                          //to reset input fields when using state.
    //     setName("");
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
                        <input id="username" type="text" /*onChange={OnNameChangeHandler} value={name}*/ ref={nameRef}/>
                        <label htmlFor="age">Age(Years)</label>
                        <input id="age" type="number" /*onChange={OnAgeChangeHandler} value={age}*/ ref={ageRef}/>
                        <button type="submit">ADD USER</button>
                    </form>
                </Card>
            </Wrapper>   
    )
}

export default AddUserForm;