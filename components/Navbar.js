import { useContext } from 'react';
import classNames from 'classnames';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import CurrentSectionContext from 'context/CurrentSection';
import { SECTIONS } from 'data';
import { GoogleAnalyticsEvent } from 'components';
import styles from 'styles/components/navbar.module.scss';

gsap.registerPlugin(ScrollToPlugin);

function Navbar() {
  const { section } = useContext(CurrentSectionContext);

  const handleButtonClick = ({ id }) => {
    gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 10 } });

    GoogleAnalyticsEvent({
      action: 'navbar_item_click',
      params: {
        event_category: 'navbar_click',
        event_label: id,
        section: id,
      },
    });
  };

  return (
    <header className={styles.navigation}>
      <nav aria-label="Sections">
        {!!SECTIONS?.length && (
          <ul>
            {SECTIONS.map(({ id, subtitle }) => {
              const isActive = section === id;
              return (
                <li
                  key={id}
                  className={classNames({ [styles.active]: isActive })}
                >
                  <button
                    onClick={() => handleButtonClick({ id })}
                    type="button"
                    aria-label={`Jump to ${subtitle} section`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {id}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
