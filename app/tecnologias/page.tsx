import Image from "next/image";

import Link from "next/link";
import styles from "./page.module.scss";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.saldacao}>Ferramentas de Trabalho</h1>

        {/* Sessão logos das tecnologias */}
        <div className={styles.cardGrid}>

            <div className={styles.card}>
              <Image
              className={styles.logoJs}
              src="/logo-js.svg"
              alt="logo-js"
              width={200}
              height={200}
            />
            </div>
            <div className={styles.card}>
            <Image
              className={styles.logoReact}
              src="/react-js.svg"
              alt="logo-react-js"
              width={200}
              height={200}
            />
            </div>
            <div className={styles.card}>
            <Image
              className={styles.logoVue}
              src="/vuejs.svg"
              alt="logo-vue-js"
              width={200}
              height={200}
            />
            </div>
            <div className={styles.card}>
            <Image
              className={styles.logoTs}
              src="/typescript-logo.svg"
              alt="logo-typescript"
              width={200}
              height={200}
            />
            </div>
            <div className={styles.card}>
              <Image
                className={styles.logoScss}
                src="/scss-logo.svg"
                alt="logo-scss"
                width={200}
                height={200}
                />
            </div>
            <div className={styles.card}>
              <Image
                className={styles.logoBootstrap}
                src="/bootstrap-logo.svg"
                alt="logo-bootstrap"
                width={200}
                height={200}
              />
          </div>   
          <div className={styles.card}>
              <Image
                className={styles.logoGitHub}
                src="/git-hub.svg"
                alt="logo-git-hub"
                width={200}
                height={200}
              />
          </div>
          <div className={styles.card}>
              <Image
                className={styles.logoNextJs}
                src="/next.svg"
                alt="logo-next.js"
                width={200}
                height={200}
              />
          </div>
          <div className={styles.card}>
              <Image
                className={styles.logoVite}
                src="/vite-logo.svg"
                alt="logo-vite"
                width={200}
                height={200}
              />
          </div>
       </div>

        {/* Botões Next e Back */}
        <div className={styles.ctas}>
          <Link href="/home" className={styles.secondary}>
            Back
          </Link>
          <Link href="/curriculo" className={styles.primary}>
            Next
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 - Valter Vieira Gomes Junior</p>
      </footer>
    </div>
  );
}
