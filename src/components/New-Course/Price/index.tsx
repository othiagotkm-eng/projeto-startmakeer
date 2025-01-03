import { div } from "framer-motion/client";
import styles from "./styles.module.scss";

export default function Price() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/new-logo.svg" alt="" />
        </div>
        <div className={styles.price}>
          <h5>
            Pré venda: <span>de R$ 197,00</span> por
          </h5>
          <h2>12 x de R$ 13,00</h2>
          <h5>ou R$ 97,00 à vista</h5>
        </div>
        <hr />
        <div className={styles.middle}>
          <div className={styles.row}>
            <img src="/checkN.svg" alt="" />
            <h4>Aulas exclusivas</h4>
          </div>
          <div className={styles.row}>
            <img src="/checkN.svg" alt="" />
            <h4>Aulas exclusivas</h4>
          </div>
          <div className={styles.row}>
            <img src="/checkN.svg" alt="" />
            <h4>Aulas exclusivas</h4>
          </div>
          <div className={styles.row}>
            <img src="/checkN.svg" alt="" />
            <h4>Aulas exclusivas</h4>
          </div>
          <div className={styles.row}>
            <img src="/checkN.svg" alt="" />
            <h4>Aulas exclusivas</h4>
          </div>
          <div className={styles.row}>
            <img src="/checkN.svg" alt="" />
            <h4>Aulas exclusivas</h4>
          </div>
          <div className={styles.row}>
            <img src="/checkN.svg" alt="" />
            <h4>Aulas exclusivas</h4>
          </div>
        </div>
        <button>quero ser o rei do código</button>
      </div>
    </div>
  );
}
