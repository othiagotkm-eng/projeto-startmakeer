import styles from "./styles.module.scss";

export default function Depoimentos() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>DEPOIMENTOS</p>
        <h2>
          Histórias reais
          <span>
            de quem <br /> aceitou
          </span>
          o desafio
        </h2>
      </div>
      <div className={styles.middle}>
        <img src="/linear.svg" alt="" />
      </div>
    </div>
  );
}
