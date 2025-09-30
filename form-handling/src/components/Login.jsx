import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'

export default function Login() {

    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        setUser({ email: "abc@gmail.com", userName: "Hello", age: "25" })
    }, [])

    console.log(user);

    return (
        <div>Login</div>
    )
}
