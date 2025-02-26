import Link from "next/link";
import styles from "./page.module.scss";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.saldacao}>Bem-vindo ao meu portfólio!</h1>
        <p className={styles.citacao}>Este projeto encontra-se em desenvolvimento, agradecemos a sua visita breve traremos novas atualizações!</p>
        {/* Botões Next e Back */}
        <div className={styles.ctas}>
          <Link href="/portfolio" className={styles.secondary}>
            Back
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 - Valter Vieira Gomes Junior</p>
      </footer>
    </div>
  );
}