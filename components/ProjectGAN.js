import { useRef, useEffect, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "styles/components/project-gan.module.scss";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [...Array(8).keys()].map((i) => `/images/gan-${i + 1}.png`);

const ProjectGAN = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, IMAGES.length);
  }, []);

  const setPositions = () => gsap.set(itemsRef.current, { y: 0 });

  useLayoutEffect(() => {
    gsap.set(itemsRef.current, { y: 100 });
    ScrollTrigger.batch(itemsRef.current, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.15, grid: [1, 4] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
    ScrollTrigger.addEventListener("refreshInit", setPositions);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", setPositions);
    };
  }, []);

  return (
    <div className={styles.project_wrapper}>
      <div className={styles.grid}>
        {IMAGES.map((image, i) => (
          <div
            key={image}
            ref={(el) => (itemsRef.current[i] = el)}
            className={styles.item}
          >
            <img className={styles.img} src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProjectGAN), { ssr: false });
