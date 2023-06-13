import React, { useState } from "react";

import Card from "../UI/Card";
import Button from '../UI/Button';
import classes from './AddUser.module.css';


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        event.preventDefault();
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">
                    UserName
                </label>
                <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
                <label htmlFor="age">
                    Age
                </label>
                <input id="age" type="date" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;