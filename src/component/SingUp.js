import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])

    const collectData = async () => {
        if (!name || !email || !password) {
            //  alert(setError) 
            setError(true);
            return false
        }
        // console.log(name, email, password)
        let result = await fetch('https://dashbord.onrender.com/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        // console.log(result);
        localStorage.setItem("user", JSON.stringify(result))
        navigate('/')
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)} />
            {error && !name && <span className='text-red-500'>Enter  name</span>}

            <input className="inputBox" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            {error && !email && <span className='text-red-500'>Enter Gmail</span>}

            <input className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && !password && <span className='text-red-500'>Enter Password</span>}

            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}
export default SignUp