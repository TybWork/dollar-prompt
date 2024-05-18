'use client'
import axios from "axios";
import { useState } from "react";
const CreateUser = () => {
    const users = {
        firstName: "",
        lastName: "",
        gender: " ",
        email: " ",
        password: " ",

    }
    const [user, setuser] = useState(users);

    // function to get input handle
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value })
        console.log(user)
    }

    // function to handle submit
    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4001/api/user/login", user)
    }
    return (
        <div>
            <form onSubmit={submitForm} action="">
                <input type="text" name="firstName" id="firstName" placeholder="First Name..." onChange={inputHandler} />
                <input type="text" name="lastName" id="lastName" placeholder="Last Name..." onChange={inputHandler} />
                <input type="text" name="gender" id="gender" placeholder="Gender..." onChange={inputHandler} />
                <input type="text" name="email" id="email" placeholder="Email..." onChange={inputHandler} />
                <input type="text" name="password" id="password" placeholder="Password..." onChange={inputHandler} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateUser;