import React from "react";
import styles from "./styles.module.scss";

export default function Depoimentos() {
  const testimonials = [
    {
      text: "Mesmo com anos de experiência, o hackathon conseguiu me tirar do piloto automático. As tarefas eram desafiadoras e os feedbacks recebidos foram extremamente valiosos.",
      name: "Ana S.",
      role: "Front End Jr.",
      img: "/man.svg",
    },
    {
      text: "Participar desse evento foi a motivação que eu precisava. Mesmo como iniciante, consegui acompanhar, aprendi muito e ainda recebi dicas incríveis para minha carreira.",
      name: "Lucas M.",
      role: "Front End Sr.",
      img: "/man.svg",
    },
    {
      text: "Achei que seria só mais um desafio, mas foi muito mais que isso. Aprendi a lidar com pressão, a colaborar melhor em equipe e saí com um portfólio muito mais robusto.",
      name: "Javier G.",
      role: "Back End Sr.",
      img: "/man.svg",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <p>DEPOIMENTOS</p>
        <h2>
          Histórias reais
          <span>
            de quem <br /> aceitou
          </span>
          o desafio
        </h2>
      </div>
      <div className={styles.middle}>
        {/* Carrossel superior (esquerda para direita) */}
        <div className={styles.middleTop}>
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={`top-${index}`}>
              <div className={styles.card}>
                <p>{testimonial.text}</p>
                <div className={styles.profile}>
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className={styles.text}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          {/* Repetindo os elementos para continuidade */}
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={`top-duplicate-${index}`}>
              <div className={styles.card}>
                <p>{testimonial.text}</p>
                <div className={styles.profile}>
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className={styles.text}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Carrossel inferior (direita para esquerda) */}
        <div className={styles.middleBottom}>
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={`bottom-${index}`}>
              <div className={styles.card}>
                <p>{testimonial.text}</p>
                <div className={styles.profile}>
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className={styles.text}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          {/* Repetindo os elementos para continuidade */}
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={`bottom-duplicate-${index}`}>
              <div className={styles.card}>
                <p>{testimonial.text}</p>
                <div className={styles.profile}>
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className={styles.text}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
