import styles from "./styles.module.scss";

export default function Banner() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.content}>
      <img src="/rotate.svg" alt="" className={styles.rotate} />
      <div className={styles.leftside}>
        <h1>
          Aprenda a criar sites incríveis.
          <span>
            Domine HTML, CSS
            <br /> e JS
          </span>
          e transforme sua <br />
          ideia em realidade.
        </h1>
        <h5>
          Por apenas R$47,90, aprenda passo a passo como construir um site do
          zero, mesmo sem experiência prévia. Inscreva-se agora e comece a
          programar hoje!
        </h5>
        <div className={styles.buttons}>
          <button
            className={styles.filled}
            onClick={() =>
              (window.location.href = "https://pay.kiwify.com.br/dI9thX7")
            }
          >
            quero aprender agora <img src="/rightArrow.svg" alt="" />
          </button>
          <button onClick={() => handleScroll("premiacao")}>
            veja o que você vai aprender <img src="/rightArrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.rightside}>
        <iframe
          src="https://drive.google.com/file/d/1ESYX2jkAxv9CVRpu7Kkr2M4QX95RignG/preview"
          width="560"
          height="315"
          allow="autoplay"
        ></iframe>
        <div className={styles.buttons2}>
          <button
            className={styles.filled}
            onClick={() =>
              (window.location.href = "https://pay.kiwify.com.br/dI9thX7")
            }
          >
            quero aprender agora <img src="/rightArrow.svg" alt="" />
          </button>
          <button onClick={() => handleScroll("premiacao")}>
            veja o que você vai aprender <img src="/rightArrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
