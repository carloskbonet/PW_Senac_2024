import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  function StartGame() {
    router.push(`/Game`);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h2>Regras do Jogo</h2>
        <p>Regra 1.- Esse é o Jogo da Forca !! Você poderá citar 3 letras, após isso tente acertar a palavra.</p>
        <p>Regra 2.- Há um limite de 1 minuto para adivinhar a palavra.</p>

        <button onClick={StartGame}>Iniciar Jogo</button><br />
        <button>Configurações</button>
      </div>
    </div>
  );
}
