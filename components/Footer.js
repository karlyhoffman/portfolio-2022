import Image from "next/image";
import styles from "styles/components/footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.col_left}>
        &copy;{new Date().getFullYear() || ""} Karly Hoffman
      </div>
      <div className={styles.col_right}>
        <a>View Source Code</a>
      </div>
    </footer>
  );
}

export default Footer;
