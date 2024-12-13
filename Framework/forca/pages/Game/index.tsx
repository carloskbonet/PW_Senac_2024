import styles from "@/styles/Game.module.css";

export default function Game() {
    return (
        <div className={styles.mainContainer}>

            {/* Imagem da Forca */}
            <div className={styles.topContainer}>
                <img className={styles.gameImg} src="/forca.png" alt="" />
            </div>

            {/* Campo mostrando a frase oculta */}
            <div className={styles.botContainer}>
                <p>_ _ _ _ _ _ _ _ _ _</p>

            </div>

        </div>
    )
}