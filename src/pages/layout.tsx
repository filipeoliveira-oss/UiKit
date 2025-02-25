import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="h-dvh w-dvw flex flex-col bg-blue-500 overflow-hidden p-0 m-0">

            <Outlet />
        </div>
    )
}