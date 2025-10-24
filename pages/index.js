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
            <p>Over the past eight years, I’ve built a career in web development that focuses on building responsive, user-friendly web interfaces with a keen eye for detail. I have a particular enthusiasm for smooth UX animations and micro-interactions—small touches that make a product feel polished and intuitive. (If I had to pick a favorite language, it’d be a toss-up between JavaScript and CSS.)</p>
          </div>

          {!!MUSIC?.length && (
            <div id="music" className={styles.music}>
              <HeadlineReveal>CURRENTLY CODING TO</HeadlineReveal>
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
              <HeadlineReveal>Tools I Use</HeadlineReveal>
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
              <HeadlineReveal tag="h2">Recognition</HeadlineReveal>
              <ul className="grid">
                {RECOGNITIONS.map(({ id = '', title = '', url = '', company = '' }) => (
                  <li key={id}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.project}
                      onClick={() =>
                        handleOutboundClick({
                          event_category: 'outbound_link_click',
                          event_label: title,
                          url,
                        })
                      }
                    >
                      <h4>{title}</h4>
                      <p>with {company}</p>
                    </a>
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
