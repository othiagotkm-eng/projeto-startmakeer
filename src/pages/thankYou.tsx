import { useRouter } from "next/router";
import styles from "../styles/thankYou.module.scss";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Obrigado!</h1>
        <p>Recebemos seu formulário com sucesso. Entraremos em contato!</p>
        <button onClick={() => router.push("/")}>Voltar para a Home</button>
      </div>
    </div>
  );
}
