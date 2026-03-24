import Head from "next/head";
import styles from "../styles/feedback.module.scss";

const feedbacks = [
  {
    id: 1,
    imagem: "/feedback1.jpg",
    nome: "Cliente 1",
    texto:
      "Trabalho excelente, muito profissional e com muita qualidade. Super recomendo!",
  },
  {
    id: 2,
    imagem: "/feedback2.jpg",
    nome: "Cliente 2",
    texto:
      "Atendimento incrível, resultado muito bonito e entregue com bastante cuidado.",
  },
  {
    id: 3,
    imagem: "/feedback3.jpg",
    nome: "Cliente 3",
    texto:
      "Fiquei muito satisfeito com o serviço. Com certeza contrataria novamente.",
  },
  {
    id: 4,
    imagem: "/feedback4.jpg",
    nome: "Cliente 4",
    texto:
      "Muito bom gosto, qualidade nas imagens e atenção aos detalhes.",
  },
];

export default function Feedback() {
  return (
    <>
      <Head>
        <title>Feedback | Start Maker</title>
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.overlay}>
            <p className={styles.kicker}>OPINIÃO DOS CLIENTES</p>
            <h1>Feedbacks</h1>
            <span>Veja alguns depoimentos de quem já confiou no meu trabalho</span>
          </div>
        </section>

        <section className={styles.feedbackSection}>
          <div className={styles.titleArea}>
            <h2>O que estão dizendo</h2>
            <p>
              Cada projeto é feito com dedicação, qualidade e foco em entregar o
              melhor resultado possível.
            </p>
          </div>

          <div className={styles.grid}>
            {feedbacks.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imageBox}>
                  <img src={item.imagem} alt={item.nome} />
                </div>

                <div className={styles.content}>
                  <h3>{item.nome}</h3>
                  <p>{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}