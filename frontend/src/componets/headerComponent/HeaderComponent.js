import React from 'react';
import styles from './Header.module.css'; // Импорт модульных стилей для компоненты

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Логотип</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>Главная</a></li>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>О нас</a></li>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>Услуги</a></li>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
