import { useContext } from "react";
import classNames from "classnames";
import Image from "next/image";
import CurrentSectionContext from "context/CurrentSection";
import { SECTIONS, MUSIC, SKILLS, PROJECTS, RECOGNITIONS, CONTACT } from "data";
import {
  InfiniteLoop,
  HeadlineReveal,
  ProjectOutsideAcademy,
  ProjectGAN,
  ProjectMcD,
  GoogleAnalyticsEvent,
} from "components";
import styles from "styles/pages/home.module.scss";

const PROJECT_DEMOS = {
  "outside-academy": <ProjectOutsideAcademy />,
  gan: <ProjectGAN />,
  "mcd-visid": <ProjectMcD />,
};

export default function Home() {
  const { section } = useContext(CurrentSectionContext);
  const currentYear = new Date().getFullYear() || "";

  const handleOutboundClick = (params) => {
    GoogleAnalyticsEvent({
      action: "outbound_link_click",
      params,
    });
  };

  return (
    <div id={styles.home}>
      {!!SECTIONS?.length && (
        <aside>
          <ul>
            {SECTIONS.map(({ id, subtitle }) => (
              <li key={id} className={classNames({ [styles.active]: section === id })}>
                {subtitle.toUpperCase()}
              </li>
            ))}
          </ul>
        </aside>
      )}

      <main>
        <section id="home" className={styles.hero}>
          <h1 className="sr-only">Karly Hoffman&apos;s {currentYear} Developer Portfolio</h1>

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
              Over the past nine years, I&apos;ve built a career in web development focusing on building
              responsive, user-friendly web interfaces with a keen eye for detail. I have a
              particular enthusiasm for smooth UX animations and micro-interactions—small touches
              that make a product feel polished and intuitive.
            </p>

            <p>
              Though frontend is my specialty, my full-stack coding academy training and experience
              at design agencies have sharpened my ability to learn quickly and deliver impactful
              features under tight timelines. I&apos;m comfortable diving into new technologies and
              adapting as projects evolve—whether that means integrating APIs, debugging across the
              stack, or collaborating closely with designers and stakeholders.
            </p>
          </div>

          <HeadlineReveal tag="h2" center>Philosophy</HeadlineReveal>
          <div className={styles.intro_text}>
            <p>
              My development philosophy centers on writing clean, maintainable code that&apos;s easy to understand and built to last. I&apos;ve found that clear organization significantly improves efficiency and collaboration. While I see real value in using AI tools to get unstuck or explore alternatives, I prefer to start with documentation and established best practices. I believe that&apos;s how to build lasting skills and a deeper understanding.
            </p>
          </div>

          {!!MUSIC?.length && (
            <div id="music" className={styles.music}>
              <HeadlineReveal center>CODING TO</HeadlineReveal>
              <InfiniteLoop className={styles.music_wrapper}>
                {MUSIC.map(({ artist = '', album = '', image = '', url }) => (
                  <div key={album} className={styles.album} title={`"${album}" by ${artist}`}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        handleOutboundClick({
                          event_category: "outbound_link_click",
                          event_label: `Album (${album} by ${artist})`,
                          url,
                        })
                      }
                    >
                      <Image
                        src={image}
                        alt={`"${album}" by ${artist}`}
                        fill
                        sizes="(max-width: 992px) 20vw, (max-width: 1800px) 12vw"
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
              <HeadlineReveal center>Tools I Use</HeadlineReveal>
              <ul className="grid">
                {SKILLS.tools.map(({ name, url }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        handleOutboundClick({
                          event_category: "outbound_link_click",
                          event_label: name,
                          url,
                        })
                      }
                    >
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
          {/* {PROJECTS.featured?.map(
            ({ id = "", title = "", url = "", technologies = [] }) => (
              <div className={styles.project} key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    handleOutboundClick({
                      event_category: "outbound_link_click",
                      event_label: title,
                      url,
                    })
                  }
                >
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
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      handleOutboundClick({
                        event_category: "outbound_link_click",
                        event_label: title,
                        url,
                      })
                    }
                  >
                    {PROJECT_DEMOS[id]}
                  </a>
                </div>
              </div>
            )
          )} */}

          {!!RECOGNITIONS?.length && (
            <div className={styles.awards}>
              <HeadlineReveal tag="h2" center>Recognition</HeadlineReveal>
              <ul className="grid">
                {RECOGNITIONS.map(({ id = '', title = '', url = '', company = '', projectUrl = '' }) => (
                  <li key={id}>
                    <div className={styles.project}>
                      <div>
                        <h4>{title} <span>with {company}</span></h4>
                      </div>

                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.view_project}
                        onClick={() =>
                          handleOutboundClick({
                            event_category: 'outbound_link_click',
                            event_label: title,
                            url,
                          })
                        }
                      >
                        View Award
                      </a>

                      {!!projectUrl.length && (
                        <a
                          href={projectUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.view_project}
                          onClick={() =>
                            handleOutboundClick({
                              event_category: 'outbound_link_click',
                              event_label: `Project Link - ${title}`,
                              url: projectUrl,
                            })
                          }
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {!!CONTACT.length && (
          <section id="contact" className={styles.contact}>
            <HeadlineReveal tag="h2">Contact</HeadlineReveal>
            <ul className="grid">
              {CONTACT.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      handleOutboundClick({
                        event_category: "outbound_link_click",
                        event_label: label,
                        url,
                      })
                    }
                  >
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
