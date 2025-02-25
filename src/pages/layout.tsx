import { Outlet } from "react-router-dom";
import Header from "../componets/header";

export default function Layout(){
    return(
        <div className="h-dvh w-dvw flex flex-col bg-black overflow-hidden p-0 m-0">
            <Header/>
            <Outlet />
        </div>
    )
}