import { useState } from "react";
import styles from "./styles.module.scss";

const faqs = [
  {
    question: "Como posso me inscrever no hackathon?",
    answer:
      "Basta clicar no botão de inscrição na página inicial, preencher o formulário com seus dados e confirmar sua participação. Após isso, você terá acesso a todos os materiais e informações necessárias para começar.",
  },
  {
    question: "Posso participar sozinho ou preciso de um time?",
    answer: "Você pode participar sozinho ou montar um time. A escolha é sua!",
  },
  {
    question: "Quais são os requisitos para participar?",
    answer:
      "Ter vontade de aprender e se desafiar. Não é necessário ter experiência prévia.",
  },
  {
    question: "Como funciona a avaliação dos projetos?",
    answer:
      "Os projetos serão avaliados por um painel de especialistas com base na originalidade, funcionalidade e apresentação.",
  },
  {
    question: "O que acontece após a inscrição?",
    answer: "Você receberá acesso aos recursos e orientações para começar.",
  },
  {
    question: "Quando será o anúncio dos vencedores?",
    answer: "Os vencedores serão anunciados no final do evento.",
  },
  {
    question: "Quais são os prêmios?",
    answer: "Os prêmios serão divulgados durante o evento. Fique atento!",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>FAQ</p>
        <h2>
          Dúvidas e <br />
          perguntas frequentes
        </h2>
      </div>
      <div className={styles.middle}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faq} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.question}>
              <div className={styles.leftQ}>
                <h4>{index + 1}. </h4>
                <h4>{faq.question}</h4>
              </div>
              <div
                className={`${styles.icon} ${
                  activeIndex === index ? styles.rotate : ""
                }`}
              >
                <img src="rightArrow.svg" alt="" />
              </div>
            </div>
            <div
              className={styles.answer}
              style={{
                maxHeight: activeIndex === index ? "100px" : "0",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <h5>{faq.answer}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
