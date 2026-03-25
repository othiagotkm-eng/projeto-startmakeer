import Head from "next/head";
import styles from "../styles/feedback.module.scss";
import { useEffect, useState } from "react";

const feedbacks = [
  {
    id: 1,
    imagem: "/feedback.png",
    nome: "Cliente 1",
    texto:
      "Trabalho excelente, muito profissional e com muita qualidade. Super recomendo!",
  },
  {
    id: 2,
    imagem: "/feedback (2).png",
    nome: "Cliente 2",
    texto:
      "Atendimento incrível, resultado muito bonito e entregue com bastante cuidado.",
  },
  {
    id: 3,
    imagem: "/feedback (3).png",
    nome: "Cliente 3",
    texto:
      "Fiquei muito satisfeito com o serviço. Com certeza contrataria novamente.",
  },
  {
    id: 4,
    imagem: "/feedback (4).png",
    nome: "Cliente 4",
    texto:
      "Muito bom gosto, qualidade nas imagens e atenção aos detalhes.",
  },
  {
    id: 5,
    imagem: "/feedback (5).png",
    nome: "Cliente 5",
    texto:
      "Uma profissional muito dedicada, atenciosa e com um resultado final que superou minhas expectativas. Recomendo de olhos fechados!",
  },
  {
    id: 6,
    imagem: "/feedback (6).png",
    nome: "Cliente 6",
    texto:
      "Excelente trabalho, super recomendo, muito profissional e atenciosa, entregou um resultado incrível, superou minhas expectativas, com certeza contratarei novamente!",
  },
];

export default function Feedback() {
  const [imagemAberta, setImagemAberta] = useState<string | null>(null);

  useEffect(() => {
    if (!imagemAberta) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setImagemAberta(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [imagemAberta]);

  return (
    <>
      <Head>
        <title>Feedback | Start Maker</title>
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.overlay}>
            <p className={styles.kicker}>OPINIÃO DOS CLIENTES</p>
            <h1>FEEDBACK</h1>
            <span>
              Veja alguns depoimentos de quem já confiou no meu trabalho
            </span>
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
                <button
                  type="button"
                  className={styles.imageBox}
                  onClick={() => setImagemAberta(item.imagem)}
                  aria-label={`Abrir imagem de ${item.nome}`}
                >
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className={styles.feedbackImage}
                  />
                </button>

                <div className={styles.content}>
                  <h3>{item.nome}</h3>
                  <p>{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {imagemAberta && (
          <div
            className={styles.modalOverlay}
            onClick={() => setImagemAberta(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada"
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                setImagemAberta(null);
              }}
            >
              ×
            </button>

            <img
              src={imagemAberta}
              alt="Imagem ampliada"
              className={styles.modalImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
    </>
  );
}
