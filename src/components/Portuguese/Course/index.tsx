import router from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";
interface CourseProps {
  urlParams: string;
}

<section
  className={styles.hero}
  style={{ backgroundImage: "url('/FOTOKARLA.png')" }}
>
  <div className={styles.heroOverlay}>
    <p className={styles.kicker}>FILMAKER | FOTOGRAFIAS</p>
    <h1>START MAKER</h1>
    <span>Conheça mais sobre mim e meu trabalho</span>
  </div>
</section>

const Course = ({ urlParams }: CourseProps) => {
  const [lightPosition, setLightPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });
  const scaleFactor = 1.05;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const overlaySize = 100; // Half the overlay size for centering
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const adjustedX = (event.clientX - left) / scaleFactor;
    const adjustedY = (event.clientY - top) / scaleFactor;

    setLightPosition({
      x: adjustedX - overlaySize,
      y: adjustedY - overlaySize,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setLightPosition((prevPosition) => ({
      ...prevPosition,
      visible: false,
    }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      import("react-facebook-pixel")
        .then((module) => {
          const ReactPixel = module.default;
          ReactPixel.track("ViewContent", {
            content_name: "Curso",
            value: 97.0,
            currency: "BRL",
          });
        })
        .catch((err) =>
          console.error("Failed to load React Facebook Pixel", err)
        );
    }

    router.push(`/new-course?${urlParams}`);
  };

  return (
    <>
      <section
        className={styles.container}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          className={styles.lightEffect}
          style={{
            background: `radial-gradient(circle closest-side, rgba(255, 255, 255, 0.3), transparent)`,
            transform: `translate(${lightPosition.x}px, ${lightPosition.y}px)`,
            opacity: lightPosition.visible ? 1 : 0,
          }}
        />
        <div className={styles.content}>
          <div className={styles.icon}>
            <img src="/newicon.png" />
          </div>
          <div className={styles.text}>
            <h2>Sobre mim</h2>
            <h5>
              Aqui você vai conhecer um pouco sobre meu trabalho.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
