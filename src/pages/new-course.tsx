import Header from "@/components/New-Course/Header";
import { useEffect } from "react";
import styles from "../styles/newCourse.module.scss";
import Banner from "@/components/New-Course/Banner";
import Section2 from "@/components/New-Course/Section2";
import Cards from "@/components/New-Course/Cards";
import Depoimentos from "@/components/New-Course/Depoimentos";
import Steps from "@/components/New-Course/Steps";
import Price from "@/components/New-Course/Price";
import FAQ from "@/components/New-Course/FAQ";
import Footer from "@/components/New-Course/Footer";
import BannerTimer from "@/components/New-Course/Timer";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track("ViewContent");
    }
  }, []);

  const pageTitle = "curso";

  return (
    <div className={styles.container}>
      <Header />
      <div id="inscricao">
        <BannerTimer targetDate="2025-01-10T23:59:59" />
      </div>
      <div id="desafio">
        <Banner />
      </div>
      <div id="como-funciona">
        <Section2 />
      </div>
      <div id="premiacao">
        <Cards />
      </div>
      <div id="depoimentos">
        <Depoimentos />
      </div>
      <div id="steps">
        <Steps />
      </div>
      <div id="price">
        <Price />
      </div>
      <div id="duvidas">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
