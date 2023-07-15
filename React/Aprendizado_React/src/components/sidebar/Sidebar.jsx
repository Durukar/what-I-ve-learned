import stylesSidebar from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={stylesSidebar.sidebar}>
      <img 
        className={stylesSidebar.cover} 
        src="https://images.unsplash.com/photo-1605101479435-005f9c563944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

      <div className={stylesSidebar.Profile}>
        <strong>Lucas Davila</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}