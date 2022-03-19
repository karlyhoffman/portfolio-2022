import { useRef, useState, useEffect, Children } from "react";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "styles/components/infinite-loop.module.scss";

gsap.registerPlugin(ScrollTrigger);

const InfiniteLoop = ({ children, className }) => {
  const container = useRef();
  const [containerHeight, setContainerHeight] = useState();
  const itemsRef = useRef([]);
  const items = Children.toArray(children);

  useEffect(() => {
    const timeline = gsap.timeline({ paused: false });

    /* Set Starting Positions */
    setContainerHeight(container.current.getBoundingClientRect().height);
    const totalLength = itemsRef.current
      .map((item) => item.offsetWidth)
      .reduce((accumulator, currentValue, i) => {
        const currentItem = itemsRef.current[i];
        gsap.set(currentItem, {
          x: accumulator,
          position: "absolute",
        });
        return accumulator + currentValue;
      }, 0);

    /* Animate Items */
    const moveItems = gsap.to(itemsRef.current, {
      duration: itemsRef.current.length * 5,
      repeat: -1,
      ease: "none",
      x: `+=${totalLength}`,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalLength), // force x value to be between 0 and totalLength using modulus
      },
    });
    timeline.add(moveItems);

    // Increase rotation speed on scroll
    ScrollTrigger.create({
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
  }, []);

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
