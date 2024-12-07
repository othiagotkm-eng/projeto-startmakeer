import Router from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ModalForm from "@/components/Budget/Modal";

interface StickFooterProps {
  title: string;
  buttonText: string; // Nova prop para o texto do botão
}

const StickFooter = ({ title, buttonText }: StickFooterProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop > 400 && scrollTop + windowHeight < fullHeight - 50) {
        // Mostra o botão se o scroll passar de 400 e não estiver no final
        setIsVisible(true);
      } else {
        // Esconde o botão ao voltar ou chegar ao final da página
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((module) => {
          const ReactPixel = module.default;
          ReactPixel.track("InitiateCheckout", {
            content_name: "Curso",
            value: 17.0,
            currency: "BRL",
          });
        })
        .catch((err) =>
          console.error("Failed to load React Facebook Pixel", err)
        );
      if (window.gtag) {
        window.gtag("event", "InitiateCheckout", {
          event_category: "engagement",
          event_label: "Curso Checkout",
          value: 17.0,
          currency: "BRL",
        });
      }
      let redirectUrl = "https://pay.kiwify.com.br/UyOtZiG";

      Router.push(redirectUrl);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className={styles.container}
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
      >
        <div className={styles.content}>
          <div className={styles.button}>
            <button onClick={handleModalOpen} id="iniciar-checkout">
              <p>
                {buttonText} <img src="/public/buttonArrow.svg" />
              </p>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <ModalForm onClose={handleModalClose} />}
    </>
  );
};

export default StickFooter;
