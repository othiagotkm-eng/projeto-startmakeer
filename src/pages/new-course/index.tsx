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
            <span>Conheça mais sobre mim e meu trabalho</span>
          </div>
        </section>

       <section className={styles.aboutContent}>
  <h2>Sobre Mim</h2>

  <p>
    Sou apaixonado por fotografia, filmagens e criação de conteúdo visual...
  </p>

  <p>
    Meu objetivo é transformar ideias em imagens marcantes...
  </p>
  <p>Aqui está um pouco do meu trabalho...</p>

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
      </main >
    </>



  );
}