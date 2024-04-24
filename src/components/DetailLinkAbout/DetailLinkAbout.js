import { Link } from "react-router-dom"
import css from './DetailLinkAbout.module.css';

export const DetailLinkAbout = () => {
    return(
    <ul className={css.listLink}>
        <li><Link className={css.link} to="company">Company</Link></li>
        <li><Link className={css.link} to="team">Team</Link></li>
    </ul>
    )
}