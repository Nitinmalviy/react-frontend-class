import { createContext, useState } from "react";

const UserContext = createContext({});

export function UserProvider({ children }) {
    const [user, setUser] = useState({ email: "", userName: "", age: "" });

    console.log(user.email);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}


export { UserContext }