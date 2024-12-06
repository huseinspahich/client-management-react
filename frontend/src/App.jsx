import { useEffect,useState } from 'react'
import React from 'react'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'
import ModalForm from './components/ModalForm'

const App = () => {
  const [modalTitle, setModalTitle] = useState("Add");

  const openModal = (title) => {
    setModalTitle(title);
    document.getElementById("my_modal_3").showModal(); 
  };


  return (

    <>
     <NavBar openModal={openModal}/>
     <TableList openModal={openModal}/>
     <ModalForm mode={modalTitle}/>
    </>
    
  )
}

export default App
