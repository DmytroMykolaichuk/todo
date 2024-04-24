import { useState } from "react";
import {Modal} from "../components/Modal/Modal";
import { TaskForm } from "../components/TaskForm/TaskForm";
import {AppBar} from "../components/AppBar/AppBar";
import {TaskList} from "../components/TaskList/TaskList";
import { ButtonCreate } from "../components/ButtonCreate/ButtonCreate";



export const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    }
    return(
    <>
        <AppBar/>
        <ButtonCreate toggleModal={toggleModal}/>
        {showModal && <Modal toggleModal={toggleModal}><TaskForm /></Modal>}
        <TaskList />
    </>
    )
}