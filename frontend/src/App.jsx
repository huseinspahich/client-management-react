import { useEffect,useState } from 'react'
import React from 'react'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'
import ModalForm from './components/ModalForm'

const App = () => {
  const [modalTitle, setModalTitle] = useState("Add");
  const [searchTerm, setSearchTerm] = useState(""); 

  const openModal = (title) => {
    setModalTitle(title);
    document.getElementById("my_modal_3").showModal(); 
  };


  return (

    <>
     <NavBar openModal={openModal} setSearchTerm={setSearchTerm}/>
     <TableList openModal={openModal} searchTerm={searchTerm}/>
     <ModalForm mode={modalTitle}/>
    </>
    
  )
}

export default App
