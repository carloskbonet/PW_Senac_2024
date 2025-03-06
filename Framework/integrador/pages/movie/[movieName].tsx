import styles from "@/styles/movieName.module.css";
import { setDefaultAutoSelectFamily } from "net";
import { useState, useEffect } from "react";

export default function Page() {
    const [movie , setMovie] = useState();

    async function fetchData() {
        try {
            const response = await fetch(`/api/action/movie/find?name=` + 'Kung Fu Panda 4', {
                method: 'GET'
            });

            const responseData = await response.json();

            alert(responseData.message);
            console.log(responseData);

        }
        catch (err) {
            alert('Algo deu errado');
            console.log(err);
        }
    }


    useEffect(() => {
        // Adicionar funções dentro do useEffect
        fetchData();
    });



    return(
        <main className={styles.main}>
            <div className={styles.movieContainer}>
                <img className={styles.movieImg} src="/kungfupanda.jpg" alt="" />
                

                <div className={styles.movieInfos}>
                    <h1 className={styles.name}>Kung Fu Panda 3</h1>
                    <hr />
                    <p>2016  ◆ Livre ◆ DreamWorks</p>
                    <hr />
                    <p> 7.6 / 10 ⭐   -  2h34m </p>

                    <h2>Streaming</h2>
                    <img className={styles.streaming} src="/streaming/primevideo.png" alt="" />
                </div>
            </div>
            
            <br />
            <p>Desta vez, Mestre Shifu tem como principal ensinamento fazer com que Po aprenda a técnica de dominação do Chi, uma espécie de “energia vital”. Porém, o atrapalhado panda acaba se desconcentrando com a chegada do pai de sangue, o panda Li, que o carrega para a vila secreta dos pandas – aguçando o ciúme do Sr Ping, o “pai” ganso de Po. Em paralelo, o poderoso touro Kai, O Coletor, um centenário inimigo do Mestre Oogway, reúne forças para voltar para o mundo dos vivos e tomar o que ele acha que é dele por direito. Caberá a Po e seus amigos impedir o maléfico plano do vilão.</p>


            <div>
                <iframe className={styles.movieVideo} src="https://www.youtube.com/embed/q75bGipJzIg" />
            </div>

            <div>
            </div>

        </main>
    );
}