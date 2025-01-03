import styles from "./styles.module.scss";

export default function Section2() {
  return (
    <div className={styles.content}>
      <div className={styles.leftside}>
        <img src="/course.png" alt="" />
      </div>
      <div className={styles.rightside}>
        <p>O DESAFIO</p>
        <h2>
          Desafio, <span>Aprendizado</span> <br />e Recompensas!
        </h2>
        <div className={styles.row}>
          <img src="/icon1.svg" alt="" />
          <div className={styles.text}>
            <h4>Aprenda na Prática</h4>
            <h5>Um desafio 100% prático com mentorias.</h5>
          </div>
        </div>
        <div className={styles.row}>
          <img src="/icon2.svg" alt="" />
          <div className={styles.text}>
            <h4>Aprenda na Prática</h4>
            <h5>Um desafio 100% prático com mentorias.</h5>
          </div>
        </div>
        <div className={styles.row}>
          <img src="/icon3.svg" alt="" />
          <div className={styles.text}>
            <h4>Aprenda na Prática</h4>
            <h5>Um desafio 100% prático com mentorias.</h5>
          </div>
        </div>
        <button>quero ser o rei do código</button>
      </div>
    </div>
  );
}
