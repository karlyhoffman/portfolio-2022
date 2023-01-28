import Image from "next/image";
import styles from "styles/components/footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.col_left}>
        Built with{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <strong>Next.js</strong>
        </a>
        {' '}in March 2022
      </div>
      <div className={styles.col_right}>
        <a href="https://github.com/karlyhoffman/portfolio-2022" target="_blank" rel="noreferrer">
          View Source Code
        </a>
      </div>
    </footer>
  );
}

export default Footer;
