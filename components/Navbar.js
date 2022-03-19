import { useContext } from "react";
import classNames from "classnames";
import CurrentSectionContext from "context/CurrentSection";
import styles from "styles/components/navbar.module.scss";

const SECTIONS = ["home", "about", "skills", "work", "contact"];

function Navbar() {
  const { section } = useContext(CurrentSectionContext);

  console.log(section);

  return (
    <header className={styles.navigation}>
      <nav>
        <ul>
          {SECTIONS.map((id) => (
            <li
              key={id}
              className={classNames({ [styles.active]: section === id })}
            >
              <a href={`#${id}`}>{id}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
