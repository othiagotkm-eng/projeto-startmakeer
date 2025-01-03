import { s } from "framer-motion/client";
import styles from "./styles.module.scss";

export default function Steps() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>ETAPAS</p>
        <h2>Do briefing à premiação, </h2>
        <h5>
          Cada etapa foi desenhada para testar suas habilidades <br /> e elevar
          seu nível como dev
        </h5>
      </div>
      <div className={styles.middle}>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/checkP.svg" alt="" />
            <h3>Conheça o desafio.</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/checkP.svg" alt="" />
            <h3>Conheça o desafio.</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/checkP.svg" alt="" />
            <h3>Conheça o desafio.</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Receba o briefing e materiais.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
