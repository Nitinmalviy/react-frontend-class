import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Edit2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [selectedImage, setSelectImage] = useState("")
    const userData = user?.user;

    useEffect(() => {

        if (!user) {
            navigate("/login")
        }
    }, [])

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectImage(URL.createObjectURL(file))
        }
    }

    // {adress:{street:"",}}


    // adress?.street  optional chaining

    return (
        <div className=" flex min-h-screen items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 ">
                <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
                <div className="relative">
                    <div className="text-2xl font-bold mb-6 text-center h-32 w-32 m-auto bg-white rounded-full flex items-center justify-center">
                        {/* <img src={userData?.avatar.url} alt=".." /> */}
                        <img className="w-32 h-32 rounded-full" src={selectedImage} alt=".." />
                    </div>

                    <div>
                        <input onCli type="file" accept=".png, .jpg, .jpeg" id="file-upload" className="hidden" onChange={handleFileChange} />
                        <label
                            htmlFor="file-upload"
                            className="text-white rounded-full bg-blue-600 flex px-2 top-0 right-25 cursor-pointer py-2  font-bold items-center justify-center gap-3 absolute"
                        >
                            {" "}
                            <Edit2Icon className="h-6 w-6" />
                        </label>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-gray-400">Email</p>
                        <p className="font-semibold">{userData?.email || "Not Logged In"}</p>
                    </div>

                    <div>
                        <p className="text-gray-400">Password</p>
                        <p className="font-semibold">
                            {userData?.username ? userData?.username : "Not Logged In"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
