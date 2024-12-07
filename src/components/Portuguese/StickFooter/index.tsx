import Router from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ModalForm from "@/components/Budget/Modal";
import router from "next/router";

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
    router.push("/thankYou");
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
                {buttonText}{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="ArrowUpRight">
                    <path
                      id="Vector"
                      d="M15.625 5V13.125C15.625 13.2908 15.5591 13.4497 15.4419 13.5669C15.3247 13.6842 15.1657 13.75 15 13.75C14.8342 13.75 14.6753 13.6842 14.558 13.5669C14.4408 13.4497 14.375 13.2908 14.375 13.125V6.50859L5.44217 15.4422C5.32489 15.5595 5.16583 15.6253 4.99998 15.6253C4.83413 15.6253 4.67507 15.5595 4.55779 15.4422C4.44052 15.3249 4.37463 15.1659 4.37463 15C4.37463 14.8341 4.44052 14.6751 4.55779 14.5578L13.4914 5.625H6.87498C6.70922 5.625 6.55025 5.55915 6.43304 5.44194C6.31583 5.32473 6.24998 5.16576 6.24998 5C6.24998 4.83424 6.31583 4.67527 6.43304 4.55806C6.55025 4.44085 6.70922 4.375 6.87498 4.375H15C15.1657 4.375 15.3247 4.44085 15.4419 4.55806C15.5591 4.67527 15.625 4.83424 15.625 5Z"
                      fill="white"
                    />
                  </g>
                </svg>
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
