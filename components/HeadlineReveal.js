import { useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "styles/components/headline-reveal.module.scss";

gsap.registerPlugin(ScrollTrigger);

const HeadlineReveal = ({ children }) => {
  const wrapper = useRef([]);
  const el = useRef([]);

  useLayoutEffect(() => {
    gsap.to(el.current, {
      translateY: "3%",
      duration: 0.4,
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <h3 ref={wrapper} className={styles.wrapper}>
      <span ref={el} className={styles.content}>
        {children}
      </span>
    </h3>
  );
};

export default dynamic(() => Promise.resolve(HeadlineReveal), { ssr: false });
