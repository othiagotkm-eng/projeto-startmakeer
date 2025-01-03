import { s } from "framer-motion/client";
import styles from "./styles.module.scss";

export default function Steps() {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>ETAPAS</p>
        <h2>Do básico ao avançado, </h2>
        <h5>
          Cada etapa foi planejada para te guiar no aprendizado de HTML, CSS e
          JavaScript <br /> e transformar suas ideias em realidade na web.
        </h5>
      </div>
      <div className={styles.middle}>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/binoculo.svg" alt="" />
            <h3>Introdução ao HTML</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Aprenda a estrutura básica de um site.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Entenda como organizar conteúdo.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Descubra como criar links e imagens.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Crie formulários para capturar dados.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Entenda a semântica no HTML.</h5>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/page.svg" alt="" />
            <h3>Estilização com CSS</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Personalize cores e fontes.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Crie layouts flexíveis com Flexbox.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Utilize CSS Grid para organizar conteúdo.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Adicione transições e animações.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Garanta a responsividade do site.</h5>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <img src="/list.svg" alt="" />
            <h3>Interatividade com JavaScript</h3>
          </div>
          <hr />
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Entenda variáveis e funções.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Manipule elementos com o DOM.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Adicione eventos como cliques e teclas.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Trabalhe com APIs para dados dinâmicos.</h5>
          </div>
          <div className={styles.row}>
            <img src="/checkP.svg" alt="" />
            <h5>Crie validações simples de formulários.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
