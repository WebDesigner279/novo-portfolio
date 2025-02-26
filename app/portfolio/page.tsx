import Link from "next/link";
import styles from "./page.module.scss";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.saldacao}>Bem-vindo ao meu portfólio!</h1>

        {/* Sessão cards com 3 colunas e 2 linhas */}
        <div className={styles.cardGrid}>

            <div className={styles.card}>
              <h3>Website: Portal de Serviços</h3>
              <p>Plataforma web dinâmica, construída com HTML, SCSS, Next.js e JavaScript.</p>
              <Link href="/pagina-em-construcao" className={styles.cardLink}>Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Website: Controle de Estacionamento</h3>
              <p>Sistema web para gerenciamento de vagas, criado com HTML, CSS e JavaScript.</p>
              <Link href="https://parking-controle-estacionamento.vercel.app/" 
              className={styles.cardLink} 
              target="_blank" 
              rel="noopener noreferrer">Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Website: Bob&apos;s Restaurantes</h3>
              <p>Plataforma web moderna e responsiva, construída com HTML, CSS, Bootstrap e JavaScript.</p>
              <Link href="https://bobs-restaurantes.vercel.app/" 
              className={styles.cardLink}
              target="_blank" 
              rel="noopener noreferrer">Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Todo-List: Gerenciador de Tarefas</h3>
              <p>Gerenciador de tarefas interativo, desenvolvido com HTML, CSS, Vue.js e JavaScript.</p>
              <Link href="https://todo-list-vue-brown-one.vercel.app/" className={styles.cardLink}
              target="_blank" 
              rel="noopener noreferrer">Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Projeto</h3>
              <p>Descrição breve do projeto</p>
              <Link href="/pagina-em-construcao" className={styles.cardLink}>Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Projeto</h3>
              <p>Descrição breve do projeto</p>
              <Link href="/pagina-em-construcao" className={styles.cardLink}>Visualizar</Link>
            </div>
        </div>

        {/* Botões Next e Back */}
        <div className={styles.ctas}>
          <Link href="/home" className={styles.secondary}>
            Back
          </Link>
          <Link href="/tecnologias" className={styles.primary}>
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