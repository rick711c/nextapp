import SideMenubar from "./components/SideMenu/sidemenu";
import Header from "./components/header/header";
import Dashboard from "./dashboard/page";
import Login from "./components/login/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Dashboard />
      <SideMenubar />
      <Login />
    </main>
  );
}
