import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Signup() {
    const baseUrl = "https://api.freeapi.app/api/v1";
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [error, setError] = useState("");


    const data = {
        email: email, password: password, username: userName, role: "USER"
    };


    const handleSingUp = async (event) => {
        event.preventDefault()
        try {
            if (userName == "" || password == "" || email == "") {
                setError("Invalid Data Entered By You")
                return
            }

            console.log(data);


            const res = await fetch(`${baseUrl}/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });



            if (res.status == 201) {
                let response = await res.json()
                toast(`${response?.message}`)
                console.log("response.data", response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid place-content-center h-auto p-11 ">
            <ToastContainer />
            <form
                onSubmit={handleSingUp}
                className="bg-green-400 p-4 rounded-lg grid gap-3"
            >
                <div>
                    <h4 className="text-center font-bold text-2xl">Register</h4>
                </div>
                <p className="text-red text-xl text-center">
                    {error}
                </p>
                <div className="">
                    <input
                        className="border-black rounded-sm p-2 bg-amber-50 w-[210px]"
                        placeholder="@username"
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => {
                            setUserName(e.target.value)
                        }}
                    />
                </div>
                <div className="">
                    <input
                        className="border-black rounded-sm p-2 bg-amber-50 w-[210px]"
                        placeholder="example@domain.com"
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div className="">
                    <input
                        className="border-black rounded-sm p-2 bg-amber-50 w-[210px]"
                        placeholder="password"
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div className="">
                    {/* isLoader ? loaderUi : btn */}
                    <button className="border-black rounded-sm p-2 bg-amber-400 w-[210px] font-bold cursor-pointer hover:">
                        Sing-up
                    </button>
                </div>
            </form>
        </div>
    );
}
