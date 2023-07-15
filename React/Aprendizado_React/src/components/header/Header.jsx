import headerStyle from './Header.module.css'

export function Header() {
  return(
    <header className={headerStyle.header}>
      <strong>Flamengo APP</strong>
    </header>
  );
}