
import { useState, useRef} from "react";            //importing react libraries
import "./AddUserForm.css";
import Card from "../UI/card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/wrapper";

const AddUserForm=(props) =>{
 
    // const [name,setName]= useState("");              // using states
    // const [age,setAge]= useState("");
    //const [college,setCollege]= useState("");
    const [invalid,setInvalid]= useState();

    const nameRef= useRef();                            // using ref's
    const ageRef= useRef();
    const collegeRef= useRef();

    // const OnNameChangeHandler=(e) =>{                // event handler to fetch input value when using state
    //    setName(e.target.value);  
    // }

    // const OnAgeChangeHandler=(e1) =>{               
    //     setAge(e1.target.value); 
    // }

    // const OnCollegeChangeHandler=(e2) =>{               
    //     setCollege(e1.target.value); 
    // }

    const OnSubmitHandler=(e3) =>{
        e3.preventDefault();
        const enteredName=nameRef.current.value;
        const enteredAge=ageRef.current.value;
        const enteredCollege=collegeRef.current.value;
        if(enteredName.trim().length===0 || enteredAge.trim().length===0 || enteredCollege.trim().length===0){
            setInvalid({
                title: "INVALID INPUTS",
                message: "!!! Fields cannot be empty. Please enter Name,Age & College !!!"
            });
            return;
        }

        if(enteredAge<1){
            setInvalid({
                title: "INVALID AGE",
                message: "!!! Enter a valid Age(>0) !!!"
            });
            return;
        }
        props.userInfoObj(enteredName,enteredAge,enteredCollege);
        nameRef.current.value="";
        ageRef.current.value="";
        collegeRef.current.value="";
    //     setAge("");                          //to reset input fields when using state.
    //     setName("");
    //     setCollege("");
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
                        <label htmlFor="college">College</label>
                        <input id="college" type="text" /*onChange={OnCollegeChangeHandler} value={college}*/ ref={collegeRef}/>
                        <button type="submit">ADD USER</button>
                    </form>
                </Card>
            </Wrapper>   
    )
}

export default AddUserForm;