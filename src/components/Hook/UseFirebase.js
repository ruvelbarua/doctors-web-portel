import initializeFirebaseApp from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
initializeFirebaseApp();

const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const loginWinGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => setUser(result.user))
            .catch((error) => setError(error.message))
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError("");
            }
        });

    }, []);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError("")
        });
    }

    return { loginWinGoogle, user, error, handleLogOut };
};
export default useFirebase;