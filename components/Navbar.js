import styles from "styles/components/navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.navigation}>
      <nav>
        <ul>
          <li className={styles.active}>HOME</li>
          <li>ABOUT</li>
          <li>SKILLS</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
