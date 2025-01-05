import { useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function Banner() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true); // Substitui o thumbnail pelo iframe
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
          width="560"
          height="315"
          src="https://www.youtube.com/embed/76SECjWzBDc?si=em9dGZaKK3rhhwi2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
