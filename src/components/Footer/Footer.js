import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Yazid.Cinema</h2>
        <p className={styles.footer__author}>
          Created by <span className={styles.author__name}>yazidmufid05</span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
