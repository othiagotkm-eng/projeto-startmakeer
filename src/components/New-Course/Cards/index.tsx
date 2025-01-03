import styles from "./styles.module.scss";

export default function Cards() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>O DESAFIO</p>
        <h2>o que você vai encarar?</h2>
        <h5>
          Enfrente desafios reais do dia a dia de um dev. seja iniciante ou
          <br /> experiente, evolua e ganhe destaque na comunidade.
        </h5>
      </div>
      <div className={styles.middle}>
        <div className={styles.middleTop}>
          <div className={styles.card1}>
            <h3>
              <img src="/licon1.svg" alt="" />
              MÃO NA MASSA
            </h3>
            <p>Desafios práticos para te colocar no centro da ação.</p>
          </div>
          <div className={styles.card2}>
            <h3>
              <img src="/licon2.svg" alt="" /> APRENDIZADO
            </h3>
            <p>Receba feedback e insights que fazem a diferença.</p>
          </div>
        </div>
        <div className={styles.middleBottom}>
          <div className={styles.card}>
            <h3>
              <img src="/licon3.svg" alt="" /> AULAS
            </h3>
            <p>Conecte-se com outros devs que compartilham a mesma paixão.</p>
          </div>
          <div className={styles.card}>
            <h3>
              <img src="/licon4.svg" alt="" /> FERRAMENTAS
            </h3>
            <p>Conecte-se com outros devs que compartilham a mesma paixão.</p>
          </div>
          <div className={styles.card}>
            <h3>
              <img src="/licon5.svg" alt="" /> COMUNIDADE
            </h3>
            <p>Conecte-se com outros devs que compartilham a mesma paixão.</p>
          </div>
        </div>
      </div>
      <button>quero ser o rei do código</button>
    </div>
  );
}
