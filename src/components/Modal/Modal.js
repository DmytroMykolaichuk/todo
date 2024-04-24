import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { CgCloseR } from "react-icons/cg";

import css from './Modal.module.css';

export const Modal = ({toggleModal, children }) => {

  useEffect(() =>{

    const handleESC=(event)=>{
        if(event.key === "Escape")toggleModal();
    }

    document.addEventListener('keydown',handleESC)

    return ()=>document.removeEventListener('keydown',handleESC)

},[toggleModal])



  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={(e)=>{if(e.currentTarget===e.target)toggleModal()}}>
      <div className={css.modal}>
        <button type='button' onClick={toggleModal} className={css.btn}><CgCloseR size={20}/></button>
        {children}
      </div>
    </div>
    ,
    document.getElementById('modal-root')
  );
};
