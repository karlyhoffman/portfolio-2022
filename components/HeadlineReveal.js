import { useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "styles/components/headline-reveal.module.scss";
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger);

const HeadlineReveal = ({ children, tag = 'h3', center = false }) => {
  const wrapper = useRef([]);
  const el = useRef([]);
  const Tag = tag;

  useLayoutEffect(() => {
    gsap.to(el.current, {
      translateY: "4%",
      duration: 0.4,
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <Tag ref={wrapper} className={classNames(styles.wrapper, 'h3', {
        [styles.center]: center,
    })}>
      <span ref={el} className={styles.content}>
        {children}
      </span>
    </Tag>
  );
};

export default dynamic(() => Promise.resolve(HeadlineReveal), { ssr: false });
