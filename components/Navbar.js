import { useContext } from "react";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import CurrentSectionContext from "context/CurrentSection";
import styles from "styles/components/navbar.module.scss";

gsap.registerPlugin(ScrollToPlugin);

const SECTIONS = ["home", "about", "skills", "work", "contact"];

function Navbar() {
  const { section } = useContext(CurrentSectionContext);

  const handleButtonClick = ({ scrollTo }) => {
    gsap.to(window, { duration: 1, scrollTo });
  };

  return (
    <header className={styles.navigation}>
      <nav>
        <ul>
          {SECTIONS.map((id) => (
            <li
              key={id}
              className={classNames({ [styles.active]: section === id })}
            >
              <button
                onClick={() => handleButtonClick({ scrollTo: `#${id}` })}
                type="button"
              >
                {id}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
