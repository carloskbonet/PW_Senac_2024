/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "@/styles/movieName.module.css";
import { useState, useEffect } from "react";

export default function Page(  { movieName }:any  ) {
    const [movie, setMovie]:any = useState();

    async function fetchData() {
        try {
            const response = await fetch(`/api/action/movie/find?name=` + movieName, {
                method: 'GET'
            });

            const responseData = await response.json();

            setMovie(responseData.data);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        // Adicionar funções dentro do useEffect
        fetchData();
    });



    return (
        <main className={styles.main}>
            {
                movie != undefined ?

                    <div>
                        <div className={styles.movieContainer}>
                            <img className={styles.movieImg} src="/kungfupanda.jpg" alt="" />


                            <div className={styles.movieInfos}>
                                <h1 className={styles.name}>{movie.name}</h1>
                                <hr />
                                <p>{movie.releaseDate}  ◆ {movie.ageRating} ◆ {movie.studio}</p>
                                <hr />
                                <p> {movie.rating} / 10 ⭐   -  {movie.duration} </p>

                                <h2>Streaming</h2>
                                <img className={styles.streaming} src="/streaming/primevideo.png" alt="" />
                            </div>
                        </div>

                        <br />
                        <p>{movie.description}</p>


                        <div>
                            <iframe className={styles.movieVideo} src="https://www.youtube.com/embed/q75bGipJzIg" />
                        </div>

                        <div>
                        </div>
                    </div>

                    :

                    <p>Erro 404  |  Filme não encontrado.</p>
            }
        </main>
    );
}



export function getServerSideProps(context:any) {
    const { movieName } = context.query;

    return {
        props: { movieName }
    }
}