import {Outlet} from "react-router-dom";
import Header from "@components/header/header";
import HeaderContent from "../../components/header/HeaderContent";
import Footer from "./Footer/Footer";



export const WebLayout = () => {
    return (
        <div id="weblayout">
             <Header/>
             <HeaderContent/>
            <main>
                <Outlet/>
            </main>
            <Footer/>

        </div>
    )
}

