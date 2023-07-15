import headerStyle from './Header.module.css'

import flamengoLogo from '../../assets/jira-logo.png'

export function Header() {
  return(
    <header className={headerStyle.header}>
      <img src={flamengoLogo} alt="Logotipo" />
    </header>
  );
}