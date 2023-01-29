import { useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "styles/components/project-mcd.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ProjectMcD = () => {
  const wrapper = useRef();

  useLayoutEffect(() => {
    /* TEXT REVEAL */
    gsap
      .timeline({
        ease: "none",
        scrollTrigger: {
          trigger: wrapper.current,
          start: "center 75%",
          toggleActions: "play pause resume reverse",
        },
      })
      .to(".highlight", {
        width: "100%",
        duration: 0.7,
        ease: "power1.Out",
      })
      .to(
        ".top-text",
        {
          translateY: "0%",
          duration: 1.25,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        ".bottom-text",
        {
          translateY: "0%",
          duration: 1.25,
          ease: "power3.inOut",
        },
        0.15
      );

    /* FRIES */
    const enterTimeline = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: wrapper.current,
        start: "center 90%",
        toggleActions: "play pause resume reverse",
      },
    });

    let counter = 1;
    let timer = 135;
    gsap.utils.toArray(".fry").forEach((element, index) => {
      // Animate ketchup fry first
      if (index === 6) {
        const enterTween = gsap.from(element, {
          y: "30vw",
          ease: "power3.out",
          duration: 1.15,
        });
        enterTimeline.add(enterTween, 1.25);
      }
      // Alternate animating fries around middle fry
      else {
        const enterTween = gsap.from(element, {
          y: "30vw",
          ease: "power3.out",
          duration: 1,
        });
        const delay = timer / 100;
        timer += 5;
        enterTimeline.add(enterTween, delay);

        if (counter === 0) {
          counter++;
        } else if (counter > 0) {
          counter = -counter;
        } else {
          counter = -counter;
          counter++;
        }
      }
    });
  }, []);

  return (
    <div className={styles.project_wrapper} ref={wrapper}>
      <div className={styles.fries_wrapper}>
        <div className={styles.fries}>
          {[...Array(13).keys()].map((el, i) => (
            <div className={classNames(styles.fry, "fry")} key={el}>
              <Image
                src={i === 6 ? "/images/fry-ketchup.svg" : "/images/fry.svg"}
                fill
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.text_wrapper}>
        <h4>
          <span className={styles.line}>
            <span className={classNames(styles.highlight, "highlight")} />
            <span className={classNames(styles.text, "top-text")}>Simply</span>
          </span>
          <span className={styles.line}>
            <span className={classNames(styles.highlight, "highlight")} />
            <span className={classNames(styles.text, "bottom-text")}>
              Flawesome
            </span>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProjectMcD), { ssr: false });
