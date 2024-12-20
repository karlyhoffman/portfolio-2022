import { createContext, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GoogleAnalyticsEvent } from 'components';

gsap.registerPlugin(ScrollTrigger);

const CurrentSectionContext = createContext({ section: "home" });

export const CurrentSectionProvider = ({ children }) => {
  const [section, setSection] = useState("home");

  const getCurrentSection = () => {
    const sectionIDs = [...document.querySelectorAll("section")]
      .map(({ id }) => id)
      .forEach((id) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: "top 65%",
          end: "bottom center",
          onEnter: () => setSection(id),
          onEnterBack: () => setSection(id),
          // markers: true,
        });
      });
  };

  useEffect(() => {
    setTimeout(getCurrentSection, 500); // set slight delay for layout shift
  }, []);

  useEffect(() => {
    GoogleAnalyticsEvent({
      action: 'section_change',
      params: {
        event_category: 'section_change',
        event_label: section,
        section,
      },
    });
  }, [section]);

  return (
    <CurrentSectionContext.Provider value={{ section }}>
      {children}
    </CurrentSectionContext.Provider>
  );
};

export const CurrentSectionConsumer = CurrentSectionContext.Consumer;

export default CurrentSectionContext;
