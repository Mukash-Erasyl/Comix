import React from 'react';
import styles from './Header.module.css'; // Импорт модульных стилей для компонента
import logo from '../../img/logo.png'; // Импорт логотипа
import TextField from './TextField/TextFieldComponent';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Логотип" className={styles.logo} />
      </div>
      <div className={styles.finder}>
        <TextField />
      </div>
    </header>
  );
}

export default Header;
