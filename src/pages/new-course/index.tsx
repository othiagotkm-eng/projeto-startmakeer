import Head from "next/head";
import styles from "./styles/estoque.module.scss";

const produtos = [
  {
    id: 1,
    nome: "Relógio Prata Premium",
    preco: "R$ 199,90",
    imagem: "/relogio1.jpg",
    categoria: "Relógio",
  },
  {
    id: 2,
    nome: "Relógio Dourado Classic",
    preco: "R$ 219,90",
    imagem: "/relogio2.jpg",
    categoria: "Relógio",
  },
  {
    id: 3,
    nome: "Relógio Black Steel",
    preco: "R$ 239,90",
    imagem: "/relogio3.jpg",
    categoria: "Relógio",
  },
  {
    id: 4,
    nome: "Óculos Preto Lifestyle",
    preco: "R$ 149,90",
    imagem: "/oculos1.jpg",
    categoria: "Óculos",
  },
  {
    id: 5,
    nome: "Óculos Silver Premium",
    preco: "R$ 169,90",
    imagem: "/oculos2.jpg",
    categoria: "Óculos",
  },
  {
    id: 6,
    nome: "Óculos Elegance",
    preco: "R$ 159,90",
    imagem: "/oculos3.jpg",
    categoria: "Óculos",
  },
];

export default function Home() {
  const handleComprar = (produto: { nome: string; preco: string }) => {
    const numero = "5581999999999";
    const mensagem = `Olá! Tenho interesse no produto: ${produto.nome} - ${produto.preco}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Head>
        <title>Estoque de Relógios e Óculos</title>
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.overlay}></div>
          <div className={styles.heroContent}>
            <h1>Estoque de Relógios e Óculos</h1>
            <p>Confira todos os modelos disponíveis para pronta entrega.</p>
          </div>
        </section>

        <section className={styles.catalogo}>
          <h2>Nossos produtos</h2>

          <div className={styles.grid}>
            {produtos.map((produto) => (
              <div key={produto.id} className={styles.card}>
                <img src={produto.imagem} alt={produto.nome} />
                <span className={styles.categoria}>{produto.categoria}</span>
                <h3>{produto.nome}</h3>
                <p className={styles.preco}>{produto.preco}</p>

                <button onClick={() => handleComprar(produto)}>
                  Comprar no WhatsApp
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}