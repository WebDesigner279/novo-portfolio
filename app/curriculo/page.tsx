import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.saldacao}>Currículo</h1>

        {/* Avatar */}
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <Image
              className={styles.avata}
              src="/perfil.jpg"
              alt="Foto de perfil"
              width={150}
              height={150}
            />

            <div>
              <p className={styles.paragraph}>
                <span className={styles.bold}>Nome:</span> Valter Vieira Gomes Junior <br />
                <span className={styles.bold}>Idade:</span> 45 anos | Casado | Pai de família <br />
                <span className={styles.bold}>Endereço:</span> Rua Edoardo Mascheroni, n° 12 <br />
                <span className={styles.bold}>CEP:</span> 04411-110 |
                <span className={styles.bold}> Bairro:</span> Americanópolis |
                <span className={styles.bold}> Cidade:</span> São Paulo - SP. <br />
                <span className={styles.bold}>Contato:</span> WhatsApp: (11) 9 7756-7993 | e-mail: valtervieira.dev@gmail.com  
              </p>

              <p className={styles.paragraph}>
                <span className={styles.bold}>Cargo pretendido:</span> Desenvolvedor Front-End (Júnior) <br />
                <span className={styles.bold}>Tipo de contrato:</span> Registrado em CLT <br />
                <span className={styles.bold}>Modalidade:</span> Home-office
              </p>

              <p className={styles.paragraph}>
                <span className={styles.bold}>Experiência profissional:</span> Desenvolvedor Front-End (Júnior) <br />
                <span className={styles.bold}>Atividades:</span> Desenvolvimento de websites e aplicativos responsivos <br />
                <span className={styles.bold}>Modalidade:</span> Home-office
              </p>

              <p className={styles.paragraph}>
                <span className={styles.bold}>Curso superior:</span> Análise e Desenvolvimento de Sistemas <br />
                <span className={styles.bold}>Instituição:</span> UNOPAR - Anhanguera <br />
                <span className={styles.bold}>Status:</span> Incompleto, previsão para conclusão em 2026
              </p>

              <p className={styles.paragraph}>
                <span className={styles.bold}>Curso profissionalizante:</span> Engenheiro Front-End <br />
                <span className={styles.bold}>Instituição:</span> EBAC - Escola Britânica de Artes Criativas & Tecnologia <br />
                <span className={styles.bold}>Status:</span> Incompleto, previsão para conclusão em abril de 2025
              </p>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className={styles.cardGridRedes}>
          <div className={styles.cardRedes}>
            <Link href="https://github.com/webdesigner279" target="_blank">
              <Image
                className={styles.logoGit}
                src="/git-hub.svg"
                alt="GitHub Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className={styles.cardRedes}>
            <Link href="https://www.linkedin.com/in/valter-dev-frontend" target="_blank">
              <Image
                className={styles.logoLinkedin}
                src="/logo-linkedin.svg"
                alt="LinkedIn Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>

        {/* Botões Next e Back */}
        <div className={styles.ctas}>
          <Link href="/home" className={styles.secondary}>
            Back
          </Link>
          <Link href="https://drive.google.com/file/d/1sgKd2kPg0PKOy6rcAk7GsO9vvv96OMQ9/view?usp=drive_link" target="_blank" className={styles.primary}>
            Download
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 - Valter Vieira Gomes Junior</p>
      </footer>
    </div>
  );
}
