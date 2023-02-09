import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() { //nomeclatura, primeria letra maiuscula 
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ifnite"/>
        </header>
    );
}