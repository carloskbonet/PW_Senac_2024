/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkToken } from "@/services/tokenConfig";
import { getCookie, deleteCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.css";

export default function Home() {
  const [profileOptions, setProfileOptions] = useState(false);

  // Armazena todos os filmes
  const [data, setData]: Array<any> = useState(undefined);
  // Filmes filtrados
  const [filteredMovies, setFilteredMovies]: Array<any> = useState(undefined);

  const [name, setName] = useState("");

  const router = useRouter();

  function closeProfileOptions() {
    setProfileOptions(false);
  }

  function logout() {
    deleteCookie('authorization');
    router.reload();
  }

  function redirect(_path: string) {
    router.push(_path);
  }

  async function fetchData() {
    try {
      const response = await fetch(`/api/action/movie/select`, {
        method: 'GET'
      });

      const responseData = await response.json();

      setData(responseData.data);
      setFilteredMovies(responseData.data);
    }
    catch (err) {
      console.log(err);
    }
  }


  function movieClick(movieName: string) {
    router.push(`/movie/${movieName}`);
  }


  function searchFilter(array: Array<any>, text: string) {
    if (text == '') {
      return array;
    }
    else {
      return array.filter((el: any) => el.name.toLowerCase().includes(text.toLowerCase()));
    }
  }

  function applyFilter(e: any) {
    e.preventDefault();
    try {
      const filteredArray = searchFilter(data, name);

      // Salvar os filmes filtrados
      setFilteredMovies(filteredArray);
    }
    catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {

    fetchData();

  }, []);



  return (
    <main>
      {
        profileOptions ?

          <div className={styles.profileOptions}>
            <button onClick={closeProfileOptions} className={styles.closeProfileBtn}>X</button>
            <br /><br />

            <button className={styles.profileButton} onClick={() => { redirect(`/movie/create`) }}>Criação de Filmes</button>
            <button className={styles.logoutBtn} onClick={logout}>Logout</button>
          </div>

          :

          <></>
      }

      <nav className={styles.navBar}>

        <img className={styles.homeButton} src="/logo.png" alt="" />

        <form className={styles.searchContainer}>
          <input onChange={(e) => { setName(e.target.value); applyFilter(e); }} type="text" placeholder="Pesquisar" />
        </form>

        <img className={styles.userProfile} src="/profilepic.png" alt="" onClick={() => { setProfileOptions(true) }} />
      </nav>

      <div className={styles.container}>
        {
          filteredMovies != undefined && filteredMovies instanceof Array ?

            filteredMovies.map(movie => (
              <div key={movie.id} className={styles.card} onClick={() => { movieClick(movie.name) }} >
                <div className={styles.sideB}></div>
                <img src={`https://img.youtube.com/vi/${movie.videoURL}/hqdefault.jpg`} alt="" />

                <hr />
                <p>{movie.name}</p>
                <p>{movie.studio}</p>
                <hr />
                <p>⭐{movie.rating}   -   {movie.releaseDate}</p>
                <hr />
              </div>
            ))

            :

            <p>No movies found</p>
        }
      </div>
    </main>
  );
}

export async function getServerSideProps({ req, res }: any) {
  try {
    const token = await getCookie('authorization', { req, res });
    if (!token) {
      throw new Error('Invalid Token');
    }
    checkToken(token);

    return {
      // Retorno caso esteja logado
      props: {}
    }
  }
  catch (err) {
    return {
      // Retorno caso NÃO esteja logado
      redirect: {
        permanent: false,
        destination: '/user/login'
      },
      props: {}
    }
  }
}
