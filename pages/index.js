import styles from "styles/pages/home.module.scss";

export default function Home() {
  return (
    <div id={styles.home}>
      <aside>
        <ul>
          <li className={styles.hero}>
            KARLY
            <br />
            HOFFMAN
          </li>
        </ul>
      </aside>
      <main>
        <section id="hero" className={styles.hero}>
          <h1 className="sr-only">Karly Hoffman</h1>
          <h2>
            <span>DEVELOPER</span>
            <span className="infinite-loop">
              <span>2022</span>
            </span>
            <span>PORTFOLIO</span>
          </h2>
        </section>
      </main>
    </div>
  );
}
