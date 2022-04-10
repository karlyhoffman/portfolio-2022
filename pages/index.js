import { useContext } from "react";
import classNames from "classnames";
import Image from "next/image";
import CurrentSectionContext from "context/CurrentSection";
import { SECTIONS, MUSIC, SKILLS, PROJECTS, CONTACT } from "data";
import {
  InfiniteLoop,
  HeadlineReveal,
  ProjectOutsideAcademy,
  ProjectGAN,
  ProjectMcD,
} from "components";
import styles from "styles/pages/home.module.scss";

const PROJECT_DEMOS = {
  "outside-academy": <ProjectOutsideAcademy />,
  "gan": <ProjectGAN />,
  "mcd-visid": <ProjectMcD />,
};

export default function Home() {
  const { section } = useContext(CurrentSectionContext);
  const currentYear = new Date().getFullYear() || "";

  return (
    <div id={styles.home}>
      {!!SECTIONS?.length && (
        <aside>
          <ul>
            {SECTIONS.map(({ id, subtitle }) => (
              <li
                key={id}
                className={classNames({ [styles.active]: section === id })}
              >
                <a href={`#${id}`}>{subtitle.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <main>
        <section id="home" className={styles.hero}>
          <h1 className="sr-only">
            Karly Hoffman&apos;s {currentYear} Developer Portfolio
          </h1>

          <div className={styles.title} aria-hidden="true">
            <div>
              <span>KARLY HOFFMAN</span>
            </div>
            <div>
              <span>DEVELOPER</span>
            </div>
            <div>
              <InfiniteLoop reverse>
                {[...Array(8).keys()].map((el) => (
                  <span key={el}>{currentYear} • </span>
                ))}
              </InfiniteLoop>
            </div>
            <div>
              <span>PORTFOLIO</span>
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <h2 className="sr-only">About</h2>
          <div className={styles.intro_text}>
            <p>
              I started out as a web editor where I gained experience writing
              and organizing content for a{' '}
              <a
                href="https://www.tennis-warehouse.com/"
                target="_blank"
                rel="noreferrer"
              >
                large e-commerce company
              </a>
              .
            </p>
            <p>
              I loved using HTML and CSS for the day-to-day tasks so I decided
              to enroll in a{' '}
              <a
                href="https://generalassemb.ly/locations/chicago"
                target="_blank"
                rel="noreferrer"
              >
                coding bootcamp
              </a>{' '}
              to learn more programming languages.
            </p>
            <p>
              Now I work at a{' '}
              <a
                href="https://www.reachcreative.com/"
                target="_blank"
                rel="noreferrer"
              >
                small boutique agency
              </a>{' '}
              where I specialize in frontend development and enjoy building
              quality websites.
            </p>
          </div>

          {!!MUSIC?.length && (
            <div id="music" className={styles.music}>
              <HeadlineReveal>CURRENTLY CODING TO</HeadlineReveal>
              <InfiniteLoop className={styles.music_wrapper}>
                {MUSIC.map(({ artist = '', album = '', image = '', url }) => (
                  <div
                    key={album}
                    className={styles.album}
                    title={`"${album}" by ${artist}`}
                  >
                    <a href={url} target="_blank" rel="noreferrer">
                      <Image
                        src={image}
                        width={400}
                        height={400}
                        alt={`"${album}" by ${artist}`}
                      />
                    </a>
                  </div>
                ))}
              </InfiniteLoop>
            </div>
          )}
        </section>

        <section id="skills" className={styles.skills}>
          <h2 className="sr-only">Skills</h2>
          {!!SKILLS.primary?.length && (
            <div className={styles.primary}>
              {SKILLS.primary.map(({ categoryName = '', skills = [] }) => (
                <div key={categoryName}>
                  <HeadlineReveal>{categoryName}</HeadlineReveal>
                  {!!skills?.length && (
                    <ul>
                      {skills.map((skill = '') => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {!!SKILLS.tools?.length && (
            <div className={styles.tools}>
              <HeadlineReveal>Tools I Use</HeadlineReveal>
              <ul className="grid">
                {SKILLS.tools.map(({ name, url }) => (
                  <li key={name}>
                    <a href={url} target="_blank" rel="noreferrer">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section id="work" className={styles.work}>
          <h2 className="sr-only">Work</h2>
          {PROJECTS.featured?.map(
            ({ id = '', title = '', url = '', technologies = [] }) => (
              <div className={styles.project} key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  <HeadlineReveal>
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                  </HeadlineReveal>
                </a>
                {!!technologies?.length && (
                  <div className={styles.tech}>
                    <ul>
                      {technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className={styles.demo}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {PROJECT_DEMOS[id]}
                  </a>
                </div>
              </div>
            )
          )}

          {!!PROJECTS.other?.length && (
            <div className={styles.more}>
              <HeadlineReveal>
                OTHER WEBSITES{' '}
                <span className={styles.sm_text}>I&apos;m proud of</span>
              </HeadlineReveal>
              <ul className="grid">
                {PROJECTS.other.map(({ id, title, url }) => (
                  <li key={id}>
                    <a href={url} target="_blank" rel="noreferrer">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {!!CONTACT.length && (
          <section id="contact" className={styles.contact}>
            <HeadlineReveal>Contact</HeadlineReveal>
            <ul className="grid">
              {CONTACT.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
