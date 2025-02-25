import { Route, Routes } from "react-router";
import App from "./App";
import Layout from "./pages/layout";

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index path="/" element={<App />} />
            </Route>
        </Routes>
    )
}