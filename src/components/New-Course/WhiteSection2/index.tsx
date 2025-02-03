import styles from "./styles.module.scss";

export default function WhiteSection2() {
  return (
    <div className={styles.content}>
      <div className={styles.leftside}>
        <img src="/course.png" alt="Curso de HTML, CSS e JavaScript" />
      </div>
      <div className={styles.rightside}>
        <p>O CURSO</p>
        <h2>
          Prática, <span>Aprendizado</span> <br />e Resultados Reais!
        </h2>
        <div className={styles.row}>
          <img src="/icon1.svg" alt="Ícone prática" />
          <div className={styles.text}>
            <h4>Aprenda do Zero</h4>
            <h5>Construa seu primeiro site sem complicações.</h5>
          </div>
        </div>
        <div className={styles.row}>
          <img src="/icon2.svg" alt="Ícone prática" />
          <div className={styles.text}>
            <h4>Desenvolva na Prática</h4>
            <h5>Aprenda HTML, CSS e JavaScript com exercícios práticos.</h5>
          </div>
        </div>
        <div className={styles.row}>
          <img src="/icon3.svg" alt="Ícone prática" />
          <div className={styles.text}>
            <h4>Ganhe Confiança</h4>
            <h5>Crie projetos incríveis para seu portfólio.</h5>
          </div>
        </div>
        <button
          onClick={() =>
            (window.location.href = "https://pay.kiwify.com.br/0Ok5Oz9")
          }
        >
          quero começar agora
        </button>
      </div>
    </div>
  );
}
