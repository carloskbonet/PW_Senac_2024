/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "@/styles/movieName.module.css";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { checkToken } from "@/services/tokenConfig";

export default function Page(  { movieName }:any  ) {
    const [movie, setMovie]:any = useState();
    const [ratingForm, setRatingForm] = useState(
        {
            value: 0,
            comment: ''
        }
    );

    function handleFormEdit(event:any , field:string) {
        setRatingForm({
            ...ratingForm,
            [field] : event.target.value
        });
    }

    async function formSubmit(event:any) {
        event.preventDefault();
        try {

            const auth_cookie = getCookie('authorization');
            const check_auth = checkToken(auth_cookie);

            const response = await fetch(`/api/action/rating/create`, {
                method: 'POST',
                headers: { 'Content-type':'application/json' },
                body: JSON.stringify({
                    message: ratingForm.comment,
                    value: Number(ratingForm.value),
                    movieName: movieName,
                    email: check_auth.email
                })
            });

            const responseJson = await response.json();

            alert(responseJson.message);

        }
        catch(err) {
            console.log(err);
        }
    }


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
    }, []);



    return (
        <main className={styles.main}>
            {
                movie != undefined ?

                    <div>
                        <div className={styles.movieContainer}>
                            <img className={styles.movieImg} src={`https://img.youtube.com/vi/${movie.videoURL}/hqdefault.jpg`} alt="" />


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
                            <iframe className={styles.movieVideo} src={`https://www.youtube.com/embed/${movie.videoURL}`} />
                        </div>

                        <div className={styles.commentSection}>

                            <form className={styles.userRating} onSubmit={formSubmit}>
                                <div className={styles.ratingStars}>

                                    <input className={styles.radio_hide} type="radio" name="stars" id="star_5" value="5" onChange={(e) => (handleFormEdit(e , 'value'))} />
                                    <label className={styles.radio_star} htmlFor="star_5"></label>

                                    <input className={styles.radio_hide} type="radio" name="stars" id="star_4" value="4" onChange={(e) => (handleFormEdit(e , 'value'))} />
                                    <label className={styles.radio_star} htmlFor="star_4"></label>

                                    <input className={styles.radio_hide} type="radio" name="stars" id="star_3" value="3" onChange={(e) => (handleFormEdit(e , 'value'))} />
                                    <label className={styles.radio_star} htmlFor="star_3"></label>

                                    <input className={styles.radio_hide} type="radio" name="stars" id="star_2" value="2" onChange={(e) => (handleFormEdit(e , 'value'))} />
                                    <label className={styles.radio_star} htmlFor="star_2"></label>

                                    <input className={styles.radio_hide} type="radio" name="stars" id="star_1" value="1" onChange={(e) => (handleFormEdit(e , 'value'))} />
                                    <label className={styles.radio_star} htmlFor="star_1"></label>

                                </div>

                                <textarea placeholder="Digite um comentário. . ." onChange={(e) => {handleFormEdit(e , 'comment')}}></textarea>

                                <input className={styles.sendRating} type="submit" value="Enviar" />
                            </form>

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