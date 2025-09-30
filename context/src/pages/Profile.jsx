import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
    const { user } = useContext(UserContext);

    return (
        <div className=" flex min-h-screen items-center justify-center bg-gray-900 text-white">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>

                <div className="space-y-4">
                    <div>
                        <p className="text-gray-400">Email</p>
                        <p className="font-semibold">{user.email || "Not Logged In"}</p>
                    </div>

                    <div>
                        <p className="text-gray-400">Password</p>
                        <p className="font-semibold">
                            {user.password ? user.password : "Not Logged In"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
