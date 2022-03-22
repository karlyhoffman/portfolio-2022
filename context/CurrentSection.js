import { createContext, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
          start: "top center",
          end: "bottom center",
          onEnter: () => setSection(id),
          onEnterBack: () => setSection(id),
        });
      });
  };

  useEffect(() => {
    setTimeout(getCurrentSection, 500); // set slight delay for layout shift
  }, []);

  return (
    <CurrentSectionContext.Provider value={{ section }}>
      {children}
    </CurrentSectionContext.Provider>
  );
};

export const CurrentSectionConsumer = CurrentSectionContext.Consumer;

export default CurrentSectionContext;
