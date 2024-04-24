import { BiSolidAddToQueue } from "react-icons/bi";
import css from './ButtonCreate.module.css'

export  function ButtonCreate({toggleModal}) {
    return (
        <button type='button'  className={css.btn} onClick={toggleModal}>Create <BiSolidAddToQueue size={24} /></button>
    )
}