import "../../index.css";
import css from './Layout.module.css' 
import { Header } from "../Header/Header";
import {Footer} from "../Footer/Footer";

export const Layout = ({children}) => {
    return(
    <div className={css.customBody}>
        <Header/>
        <main >
            <div className="container">
                {children}
            </div>
        </main>
        <Footer/>
    </div>
    )
}