import React, { useState } from "react";

export default function Form() {
    // In react we can handle the form using 2 way
    //  controlled component (state) - unControlled  ref

    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    console.log("userName.....", userName);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userName || userName === "") {
            setErrorMessage("username can not be empty");
        }


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="username"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    placeholder="@abc"
                    name=""
                    id=""
                />
                <p>{userName}</p>
                <p>{errorMessage}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
