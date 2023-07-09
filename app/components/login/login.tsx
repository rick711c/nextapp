"use client"
import { Button, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Login=()=>{
    const {data:session,status}=useSession();
    if(session){
        return <>
        
        <Button
        variant="contained"
        color={"error"}
        onClick={()=>signOut()}
        >
            sign out
        </Button>
        </>
    }
    else return <>
    Please sign in <br/>
    <Button
    variant="contained"
    color="success"
    onClick={()=>signIn()}
    >
       <Typography> sign in</Typography>
    </Button>
    </>
}
export default Login;   