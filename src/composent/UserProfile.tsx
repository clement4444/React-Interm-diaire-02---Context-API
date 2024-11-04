import { useContext } from "react";

import UserContext from "./UserContext.tsx";

function UserProfile() {
    const { isOnline, setIsOnline } = useContext(UserContext);
    return (
        <>
            <p>User is {isOnline ? "en ligne" : "hors ligne"}</p>

            <button
                onClick={() => { setIsOnline(!isOnline) }}>click to change user status </button>
        </>
    );
}

export default UserProfile;