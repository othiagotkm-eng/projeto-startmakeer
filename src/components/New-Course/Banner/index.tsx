import styles from "./styles.module.scss";

export default function Banner() {
  return (
    <div className={styles.content}>
      <img src="/rotate.svg" alt="" className={styles.rotate} />
      <div className={styles.leftside}>
        <h1>
          Supere desafios.
          <span>
            prove <br /> seu código
          </span>
          e conquiste <br />
          seu prêmio.
        </h1>
        <h5>
          Participe do hackathon que vai testar suas habilidades e <br />
          recompensar os melhores com prêmios exclusivos.
        </h5>
        <div className={styles.buttons}>
          <button className={styles.filled}>
            quero ser o rei do código <img src="/rightArrow.svg" alt="" />
          </button>
          <button>
            CONFIRA O CONTEÚDO <img src="/rightArrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.rightside}>
        <video src="/cipa.mp4" poster="/thumbnail.svg" controls></video>
      </div>
    </div>
  );
}
