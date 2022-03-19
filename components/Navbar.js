import styles from "styles/components/navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.navigation}>
      <nav>
        <ul>
          <li className={styles.active}>
            <a href="#hero">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#work">WORK</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
