import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

export function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <Main>
                <Outlet></Outlet>
            </Main>
            <Footer></Footer>
        </div>
    );
}