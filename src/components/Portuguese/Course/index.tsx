import Head from "next/head";
import styles from "./styles/estoque.module.scss";

const fotoPrincipal = "/foto1.jpg";

const fotosGaleria = [
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
  "/foto5.jpg",
  "/foto6.jpg",
];

export default function SobreMim() {
  return (
    <>
      <Head>
        <title>Sobre Mim | Start Maker</title>
      </Head>

      <main className={styles.aboutPage}>
        <section className={styles.aboutHero}>
          <div className={styles.imageSide}>
            <img src={fotoPrincipal} alt="Start Maker" />
          </div>

          <div className={styles.textSide}>
            <p className={styles.kicker}>FILMAKER | FOTOGRAFIAS</p>
            <h1>START MAKER</h1>
            <h2>Sobre Mim</h2>

            <p>
              Sou apaixonado por fotografia, filmagens e criação de conteúdo
              visual. Meu objetivo é transformar ideias em imagens marcantes,
              com identidade, qualidade e emoção.
            </p>

            <p>
              Trabalho buscando sempre entregar um resultado profissional,
              moderno e que valorize cada detalhe de cada projeto.
            </p>

            <a
              href="https://wa.me/5581SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <h2>Meu Trabalho</h2>

          <div className={styles.gallery}>
            {fotosGaleria.map((foto, index) => (
              <div key={index} className={styles.galleryCard}>
                <img src={foto} alt={`Galeria ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}