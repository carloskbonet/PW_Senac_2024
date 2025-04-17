/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "@/styles/movieName.module.css";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { checkToken } from "@/services/tokenConfig";
import { useRouter } from "next/router";


export default function Page({ movieName }: any) {
    const router = useRouter();

    const [aiResult, setAiResult] = useState("");

    const [currentUser, setCurrentUser] = useState("");
    const [confirmDelete, setConfirmDelete] = useState(false);

    const [movie, setMovie]: any = useState();
    const [ratingForm, setRatingForm] = useState(
        {
            value: 0,
            comment: ''
        }
    );

    function handleFormEdit(event: any, field: string) {
        setRatingForm({
            ...ratingForm,
            [field]: event.target.value
        });
    }

    async function formSubmit(event: any) {
        event.preventDefault();
        try {

            const auth_cookie = getCookie('authorization');
            const check_auth = checkToken(auth_cookie);

            const response = await fetch(`/api/action/rating/create`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    message: ratingForm.comment,
                    value: Number(ratingForm.value),
                    movieName: movieName,
                    email: check_auth.email
                })
            });

            const responseJson = await response.json();

            router.reload();

        }
        catch (err) {
            console.log(err);
        }
    }

    async function gptPromptSubmit(event: any) {
        event.preventDefault();
        try {
            const response = await fetch(`/api/lib/AI/prompt`, {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    movieName: movieName,
                    ratings: movie.ratings
                })
            });

            const responseData = await response.json();

            setAiResult(responseData.data);

            if (response.status == 200)
                console.log(responseData.data);

        }
        catch (err) {
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


    function formatDate(dateString: string) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };


    async function deleteOwnComment() {
        try {
            const response = await fetch(`/api/action/rating/delete`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    movieName: movieName,
                    email: currentUser
                })
            });

            const responseJson = await response.json();

            console.log(responseJson.message);
        }
        catch (err) {
            console.log(err);
        }
    }


    function getCurrentUser() {
        try {
            const auth_cookie = getCookie('authorization');
            const check_auth = checkToken(auth_cookie);

            setCurrentUser(check_auth.email);
        }
        catch (err) {
            console.log("Invalid session data");
        }
    }


    useEffect(() => {
        // Adicionar funções dentro do useEffect
        fetchData();
        getCurrentUser();

    }, []);


    function confirm() {
        deleteOwnComment();

        router.reload();
    }

    function reject() {
        setConfirmDelete(false);
    }


    return (
        <main className={styles.main}>
            {
                movie != undefined ?

                    <div>
                        {
                            confirmDelete ?
                                <div className={styles.confirmPopup}>
                                    <p>Deseja apagar o comentário?</p>

                                    <button onClick={confirm} className={styles.confirm}>Sim</button>
                                    <button onClick={reject} >Não</button>
                                </div>

                                :

                                <></>
                        }

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

















                        <br /><br />
                        <div className="max-w-5xl mx-auto px-4">
                            <button onClick={gptPromptSubmit} type="submit" className="text-[15px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Avaliação AI</button>

                            {
                                aiResult != "" ?

                                <p>{aiResult}</p>

                                :

                                <></>
                            }
                        </div>






                        {// Tailwind class
                        }

                        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
                            <div className="max-w-5xl mx-auto px-4">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comentários</h2>
                                </div>


                                <form className="mb-6" onSubmit={formSubmit}>

                                    <div className={styles.ratingStars}>

                                        <input className={styles.radio_hide} type="radio" name="stars" id="star_5" value="5" onChange={(e) => (handleFormEdit(e, 'value'))} />
                                        <label className={styles.radio_star} htmlFor="star_5"></label>

                                        <input className={styles.radio_hide} type="radio" name="stars" id="star_4" value="4" onChange={(e) => (handleFormEdit(e, 'value'))} />
                                        <label className={styles.radio_star} htmlFor="star_4"></label>

                                        <input className={styles.radio_hide} type="radio" name="stars" id="star_3" value="3" onChange={(e) => (handleFormEdit(e, 'value'))} />
                                        <label className={styles.radio_star} htmlFor="star_3"></label>

                                        <input className={styles.radio_hide} type="radio" name="stars" id="star_2" value="2" onChange={(e) => (handleFormEdit(e, 'value'))} />
                                        <label className={styles.radio_star} htmlFor="star_2"></label>

                                        <input className={styles.radio_hide} type="radio" name="stars" id="star_1" value="1" onChange={(e) => (handleFormEdit(e, 'value'))} />
                                        <label className={styles.radio_star} htmlFor="star_1"></label>

                                    </div>

                                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                        <label htmlFor="comment" className="sr-only">Your comment</label>
                                        <textarea id="comment"
                                            className="px-0 w-full text-[16px] text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                            placeholder="Escreva um comentário..." required
                                            onChange={(e) => { handleFormEdit(e, 'comment') }}></textarea>
                                    </div>


                                    <button type="submit" className="text-[15px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Postar Comentário</button>



                                </form>

                                {
                                    // Exibir os comentários dos usuários
                                }


                                {

                                    movie.ratings != undefined ?

                                        movie.ratings.map((rating: any) => (
                                            <article key={rating.id} className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                                                <footer className="flex justify-between items-center mb-2">
                                                    <div className="flex items-center">
                                                        <p className="inline-flex items-center mr-3 text-[17px] text-gray-900 dark:text-white font-semibold">
                                                            {rating.user.name}</p>
                                                        <p className="text-xl text-gray-700 dark:text-gray-400">
                                                            {rating.value}★</p>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400"> {formatDate(rating.created_at)}</p>

                                                        {
                                                            rating.user.email == currentUser ?

                                                                <div>
                                                                    <input onClick={() => { setConfirmDelete(true) }} className="bg-black text-[12px] rounded-lg w-5 h-5 text-white p-0" type="submit" value="x" />
                                                                </div>
                                                                :

                                                                <></>
                                                        }
                                                    </div>

                                                </footer>
                                                <p className="text-[18px] text-gray-500 dark:text-gray-400">
                                                    {rating.comment}</p>
                                            </article>
                                        ))

                                        :

                                        <p>No comments</p>

                                }


                            </div>
                        </section>
                    </div>

                    :

                    <p>Erro 404  |  Filme não encontrado.</p>
            }
        </main>
    );
}



export function getServerSideProps(context: any) {
    const { movieName } = context.query;

    return {
        props: { movieName }
    }
}