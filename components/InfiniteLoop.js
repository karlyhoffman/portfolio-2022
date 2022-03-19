import { useRef, useState, useEffect, Children } from "react";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useWindowSize from "hooks/useWindowSize";
import styles from "styles/components/infinite-loop.module.scss";

gsap.registerPlugin(ScrollTrigger);

const InfiniteLoop = ({ children, className }) => {
  const container = useRef();
  const [containerHeight, setContainerHeight] = useState();
  const itemsRef = useRef([]);
  const items = Children.toArray(children);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    const animationID = Date.now();
    const timeline = gsap.timeline({ paused: false });

    /* Set Starting Positions */
    const containerDimensions = itemsRef.current.reduce(
      (acc, item) => {
        gsap.set(item, {
          x: acc.width,
          position: "absolute",
        });

        if (item.offsetHeight > acc.height) {
          return {
            height: item.offsetHeight,
            width: acc.width + item.offsetWidth,
          };
        }

        return {
          ...acc,
          width: acc.width + item.offsetWidth,
        };
      },
      { width: 0, height: 0 }
    );

    const { width, height } = containerDimensions;
    setContainerHeight(height);

    /* Animate Items */
    const moveItems = gsap.to(itemsRef.current, {
      duration: itemsRef.current.length * 5,
      repeat: -1,
      ease: "none",
      x: `+=${width}`,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % width), // force x value to be between 0 and total width using modulus
      },
    });

    timeline.add(moveItems);

    /* Increase rotation speed on scroll */
    ScrollTrigger.create({
      id: animationID,
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: ({ getVelocity }) => {
        const velocity = getVelocity();
        const speed = speed === 0 ? 1 : velocity * 0.0075; // determine direction
        gsap.to(timeline, {
          timeScale: speed,
          duration: 1,
          onComplete: () => {
            gsap.to(timeline, { timeScale: 1, duration: 1 });
          },
        });
      },
    });

    return () => {
      timeline.pause(0).kill(true);
      ScrollTrigger.getById(animationID).kill(true);
    };
  }, [windowWidth]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length);
  }, [items]);

  return (
    <div
      ref={container}
      className={classNames(styles.container, className)}
      style={{ height: containerHeight }}
    >
      <div className={styles.wrapper}>
        {items.map((item, index) => (
          <div
            className={styles.item}
            ref={(el) => (itemsRef.current[index] = el)}
            key={item?.key || index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLoop;
