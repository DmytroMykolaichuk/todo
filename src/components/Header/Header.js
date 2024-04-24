import { NavLink } from "react-router-dom";
import css from './Header.module.css';


export function Header() {
    return(
        <header>
        <div className={css.heder_container}>
            <nav className={css.nav} >
                <NavLink className={css.link} to='/'>Home</NavLink>
                <NavLink className={css.link} to='/about'>About</NavLink>
            </nav>
        </div>
    </header>
    )
}