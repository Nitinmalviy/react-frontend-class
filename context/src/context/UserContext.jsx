import { createContext, useState } from "react";

const UserContext = createContext({});

export function UserProvider({ children }) {
    const [user, setUser] = useState({ email: "", password: "" });
    console.log("User context",);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext }