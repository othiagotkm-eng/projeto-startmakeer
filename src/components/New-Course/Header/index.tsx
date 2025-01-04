import styles from "./styles.module.scss";

export default function Header() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/new-logo.svg" alt="Logo" />
          <hr />
          <p onClick={() => handleScroll("desafio")}>Video</p>
          <p onClick={() => handleScroll("como-funciona")}>Aprender</p>
          <p onClick={() => handleScroll("premiacao")}>Premiação</p>
          <p onClick={() => handleScroll("duvidas")}>Dúvidas</p>
        </div>
        <div className={styles.rightside}>
          <button onClick={() => handleScroll("inscricao")}>
            <img src="/crown.svg" alt="" />
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  );
}
