import { useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "styles/components/project-outside-academy.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ProjectOutsideAcademy = () => {
  return (
    <div className={styles.project_wrapper}>
      <SmoothScrollElement scrub={1}>
        <Tilt
          className={styles.parallax_tile}
          gyroscope
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          scale={1.005}
          transitionSpeed={1000}
        >
          <Image
            className={styles.bg_img}
            src="/images/project-oa.webp"
            width={1475}
            height={515}
            alt=""
          />

          <div className={styles.text}>
            <SmoothScrollElement>
              <h4>Zion</h4>
            </SmoothScrollElement>
            <SmoothScrollElement>
              <p>
                <span>
                  PARKS 360°
                  <img src="/images/arrow-right.svg" alt="" />
                </span>
                <span>
                  IN-PARK AR
                  <img src="/images/arrow-right.svg" alt="" />
                </span>
              </p>
            </SmoothScrollElement>
          </div>
        </Tilt>
      </SmoothScrollElement>
    </div>
  );
};

const SmoothScrollElement = dynamic(
  () =>
    // Render Client Side:
    Promise.resolve(({ children, scrub = 0.5 }) => {
      const el = useRef();

      useLayoutEffect(() => {
        gsap.fromTo(
          el.current,
          {
            translateY: 50,
          },
          {
            translateY: -100,
            ease: "none",
            scrollTrigger: {
              trigger: el.current,
              start: "top bottom+=5%",
              end: "+=125%",
              scrub,
            },
          }
        );
      }, [scrub]);

      return <div ref={el}>{children}</div>;
    }),
  { ssr: false }
);

export default ProjectOutsideAcademy;
