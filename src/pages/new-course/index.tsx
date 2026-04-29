import Head from "next/head";
import styles from "./styles/estoque.module.scss";

const fotosGaleria = [
  "/CARROSEL 1.png",
  "/CARROSEL 2.png",
  "/CARROSEL 3.png",
  "/CARROSSEL 4.png",
];

export default function SobreMim() {
  return (
    <>
      <Head>
        <title className="TITULO">Sobre Mim | Start Maker</title>
      </Head>

      <main className={styles.aboutPage}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <p className={styles.kicker}>FILMAKER | FOTOGRAFIAS</p>
            <h1>START MAKER</h1>
            <span>ConheÃ§a mais sobre mim e meu trabalho</span>
          </div>
        </section>

        <section className={styles.aboutContent}>
          <div className={styles.aboutIntro}>
            <p className={styles.sectionLabel}>FILMAKER | FOTOGRAFIAS</p>
            <h2>Sobre Mim</h2>
          </div>

          <div className={styles.aboutText}>
            <p>
              Sou apaixonada por fotografia, filmagens e criaÃ§Ã£o de conteÃºdo visual...
            </p>

            <p>
              Meu objetivo Ã© transformar ideias em imagens marcantes...
            </p>
            <p>Aqui estÃ¡ um pouco do meu trabalho...</p>
          </div>

          <div className={styles.gallery}>
            {fotosGaleria.map((foto, index) => (
              <div key={index} className={styles.galleryCard}>
                <img
                  src={foto}
                  alt={`Galeria ${index + 1}`}
                  className={styles[`galleryImage${index + 1}`]}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
