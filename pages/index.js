import { Fragment } from "react";
import classNames from "classnames";
import Image from "next/image";
import { MUSIC, SKILLS, PROJECTS, CONTACT } from "data";
import styles from "styles/pages/home.module.scss";

export default function Home() {
  const currentYear = new Date().getFullYear() || "";

  return (
    <div id={styles.home}>
      <aside>
        <ul>
          <li className={styles.hero}>
            <a href="#home">
              KARLY
              <br />
              HOFFMAN
            </a>
          </li>
          <li className={styles.about}>
            <a href="#about">WHO I AM</a>
          </li>
          <li className={classNames(styles.skills, styles.active)}>
            <a href="#skills">WHAT I KNOW</a>
          </li>
          <li className={styles.projects}>
            <a href="#work">WHAT I&apos;VE BUILT</a>
          </li>
          <li className={styles.contact}>
            <a href="#contact">
              HOW TO
              <br />
              REACH ME
            </a>
          </li>
        </ul>
      </aside>

      <main>
        <section id="home" className={styles.hero}>
          <h1 className="sr-only">Karly Hoffman</h1>
          <h2>
            <span>DEVELOPER</span>
            <span className="infinite-loop">
              <span data-year={currentYear}> • {currentYear} • </span>
              {/* <span aria-hidden="true">{currentYear}</span> */}
            </span>
            <span>PORTFOLIO</span>
          </h2>
        </section>

        <section id="about" className={styles.about}>
          <h2 className="sr-only">About</h2>
          <div className={styles.intro_text}>
            <p>
              I started out as a web editor where I gained experience writing
              and organizing content for a{" "}
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
              I loved using HTML and CSS for the day-to-day tasks while working
              there, so I decided to enroll in a{" "}
              <a
                href="https://generalassemb.ly/locations/chicago"
                target="_blank"
                rel="noreferrer"
              >
                coding bootcamp
              </a>{" "}
              to learn more programming languages.
            </p>
            <p>
              Now I work at a{" "}
              <a
                href="https://www.reachcreative.com/"
                target="_blank"
                rel="noreferrer"
              >
                small boutique agency
              </a>{" "}
              where I specialize in frontend development and enjoy building
              quality websites.
            </p>
          </div>

          {!!MUSIC?.length && (
            <div className={styles.music}>
              <h3>CURRENTLY CODING TO</h3>
              <ul>
                {MUSIC.map(({ artist = "", album = "", image = "" }) => (
                  <li key={artist}>{artist}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section id="skills" className={styles.skills}>
          <h2 className="sr-only">Skills</h2>
          {!!SKILLS.primary?.length && (
            <div className={styles.primary}>
              {SKILLS.primary.map(({ categoryName = "", skills = [] }) => (
                <div key={categoryName}>
                  <h3>{categoryName}</h3>
                  {!!skills?.length && (
                    <ul>
                      {skills.map((skill = "") => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          {!!SKILLS.secondary?.length && (
            <div className={styles.secondary}>
              {SKILLS.secondary.map(({ categoryName = "", skills = [] }) => (
                <div key={categoryName}>
                  <h3>{categoryName}</h3>
                  {!!skills?.length && (
                    <ul>
                      {skills.map((skill = "") => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="work" className={styles.work}>
          <h2 className="sr-only">Work</h2>
          {PROJECTS.featured?.map(
            ({ id = "", title = "", url = "", technologies = [] }) => (
              <div className={styles.project} key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  <h3 dangerouslySetInnerHTML={{ __html: title }} />
                </a>
                {!!technologies?.length && (
                  <div className={styles.tech}>
                    <h4>Technologies Used:</h4>
                    <ul>
                      {technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className={styles.demo}>
                  {/* {PROJECT_DEMOS[id]} */}
                  <div className={styles.temp} />
                </div>
              </div>
            )
          )}

          {!!PROJECTS.other?.length && (
            <div className={styles.more}>
              <h3>
                OTHER WEBSITES{" "}
                <span className={styles.sm_text}>I&apos;m proud of</span>
              </h3>
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
            <h2 className="h3">Contact</h2>
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
