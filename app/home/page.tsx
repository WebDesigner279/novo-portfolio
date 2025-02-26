import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <h1 className={styles.saldacao}>Bem vindos ao meu Portfólio</h1> */}
        <Image
          className={styles.logoNextJs}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <p className={styles.paragraph}>
          <span className={styles.bold}>Olá,</span> sou Valter Vieira Gomes Junior
        </p>
        <p className={styles.paragraphP}>
          Desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais.
        </p>
        <p className={styles.paragraphP}>
        Experiência com tecnologias como HTML, CSS, SCSS, JavaScript e TypeScript, além de frameworks e bibliotecas como Vue.js, React.js e Next.js.
        </p>
        <p className={styles.paragraphP}>
          Estou sempre explorando novas tecnologias e aprimorando minhas habilidades para entregar soluções criativas e eficientes.
        </p>
        <p className={styles.paragraphP}>
          Este portfólio é uma amostra do que posso fazer, e estou animado para colaborar em novos desafios! Vamos construir algo incrível juntos?
        </p>

        <div className={styles.ctas}>
          <Link href="/portfolio" className={styles.primary}>
            <Image
              className={styles.logoVercel}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Ver meus projetos
          </Link>
          <Link href="/tecnologias" className={styles.secondary}>
          Tecnologias que utilizo
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 - Valter Vieira Gomes Junior</p>
      </footer>
    </div>
  );
}
