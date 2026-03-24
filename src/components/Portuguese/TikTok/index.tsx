import router from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";

const TikTok = () => {
  const [lightPosition, setLightPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const scaleFactor = 1.05;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const overlaySize = 100;
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

  const handleClick = () => {
    router.push("/feedback");
  };

  return (
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
          <img src="/thinArrow.svg" alt="Seta" />
        </div>
        <div className={styles.text}>
          <h2>Feedback</h2>
          <h5>Veja a opinião dos meus clientes</h5>
        </div>
      </div>
    </section>
  );
};

export default TikTok;