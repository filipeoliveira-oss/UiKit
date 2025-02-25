import { Outlet } from "react-router-dom";
import Header from "../componets/header";

export default function Layout(){
    return(
        <div className="h-dvh w-dvw flex flex-col bg-black p-0 m-0 overflow-auto">
            <Header/>
            <Outlet />
        </div>
    )
}