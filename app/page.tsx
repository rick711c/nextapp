"use client";
import SideMenubar from "./components/SideMenu/sidemenu";
import Header from "./components/header/header";
import Dashboard from "./dashboard/page";
import Login from "./components/login/page";
import { useSession } from "next-auth/react";
import { CssBaseline } from "@mui/material";
import scss from './Home.module.scss'

const Home:React.FC= ()=> {
  const { data: session } = useSession();
  return (
    <main className={scss.main} >
      <CssBaseline/>
      <Header />
      {session && (
        <>
          <Dashboard />
          <SideMenubar />
        </>
      )}
      <Login />
    </main>
  );
}
export default Home;
