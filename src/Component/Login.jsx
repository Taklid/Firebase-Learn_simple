import {  GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "./FirebaseInfo/FireBase";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider ();
    const googleSignIn = () => {
        console.log(auth, provider);
        // const auth =getAuth()
        signInWithPopup (auth, provider)
       
        .then((result) => {
            // eslint-disable-next-line no-unused-vars
            // const user = result.user
            console.log(result.user);
            setUser(result.user)
          
        })
        .catch((error) => {
            console.log(error);
            setUser(null)
        })

    }

    const signOut1 = () => {
        console.log(signOut1);
       signOut(auth)
        .then(() => { 
            setUser(null)
        })
    }
    return (
        <div className="text-center mt-3 ">
             <button className="bg-yellow-600 px-2 py-2 rounded-xl" onClick={googleSignIn}>Login with Google</button>
             <button onClick={signOut1} className="bg-yellow-600 px-2 py-2 rounded-xl">Sign Out</button>
             {
                user ? <button onClick={signOut1} className="bg-yellow-600 px-2 py-2 rounded-xl">Sign Out</button>:<button className="bg-yellow-600 px-2 py-2 rounded-xl" onClick={googleSignIn}>Login with Google</button>
             }
             {
                user && <div className="bg-lime-600 w-[250px] h-[50px] mx-auto mt-3">
                    <h2>{user.displayName}</h2>
                    <h2>{user.email}</h2>
                </div>
             }

             
        </div>
    );
};

export default Login;