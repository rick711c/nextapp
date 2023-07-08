"use client"
import { signIn, signOut, useSession } from "next-auth/react";

const Login=()=>{
    const {data:session,status}=useSession();
    if(session){
        return <>
        signed in as {session.user?.name} <br/>
        <button
        onClick={()=>signOut()}
        >
            sign out
        </button>
        </>
    }
    else return <>
    not signed in <br/>
    <button
    onClick={()=>signIn()}
    >
        sign in
    </button>
    </>
}
export default Login;