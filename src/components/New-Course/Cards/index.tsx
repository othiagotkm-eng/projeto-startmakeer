import styles from "./styles.module.scss";

export default function Cards() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>O CURSO</p>
        <h2>o que você vai aprender?</h2>
        <h5>
          Aprenda de forma prática e simples a criar sites modernos do zero.
          <br /> Não importa o seu nível de conhecimento, você pode começar
          agora!
        </h5>
      </div>
      <div className={styles.middle}>
        <div className={styles.middleTop}>
          <div className={styles.card1}>
            <h3>
              <img src="/licon1.svg" alt="" />
              HTML
            </h3>
            <p>
              Domine a base de qualquer site e estruture suas páginas com
              eficiência.
            </p>
          </div>
          <div className={styles.card2}>
            <h3>
              <img src="/licon2.svg" alt="" /> CSS
            </h3>
            <p>
              Aprenda a estilizar seus sites com designs incríveis e
              responsivos.
            </p>
          </div>
        </div>
        <div className={styles.middleBottom}>
          <div className={styles.card}>
            <h3>
              <img src="/licon3.svg" alt="" /> JAVASCRIPT
            </h3>
            <p>Adicione interatividade e dinamismo às suas páginas da web.</p>
          </div>
          <div className={styles.card}>
            <h3>
              <img src="/licon4.svg" alt="" /> PROJETOS PRÁTICOS
            </h3>
            <p>
              Crie projetos reais para aplicar seus conhecimentos e montar seu
              portfólio.
            </p>
          </div>
          <div className={styles.card}>
            <h3>
              <img src="/licon5.svg" alt="" /> SUPORTE EXCLUSIVO
            </h3>
            <p>
              Conte com ajuda especializada para tirar todas as suas dúvidas.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          (window.location.href = "https://pay.kiwify.com.br/dI9thX7")
        }
      >
        quero aprender agora
      </button>
    </div>
  );
}
