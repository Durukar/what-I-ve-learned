import { PencilLine } from 'phosphor-react'

import stylesSidebar from './Sidebar.module.css'
import { Avatar } from '../avatar/Avatar'
import { Modal } from './modal/Modal'
import { useState } from 'react'

export function Sidebar() {
  const[openModal, setOpenModal] = useState(false)

  return (
    <aside className={stylesSidebar.sidebar}>
      <img 
        className={stylesSidebar.cover} 
        src="https://images.unsplash.com/photo-1605101479435-005f9c563944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

      <div className={stylesSidebar.profile}>
        <Avatar src="https://github.com/durukar.png" />
        <strong>Lucas Davila</strong>
        <span>Snews Developer</span>
      </div>
      <footer>
        <a onClick={() => setOpenModal(true)} href="#">
          {console.log(openModal)}
          <PencilLine size={20} />
          <span>Abrir Ticket</span>
          <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
            Conteúdo do Modal
          </Modal>
        </a>
      </footer>
    </aside>
  )
}