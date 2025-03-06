/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkToken } from "@/services/tokenConfig";
import { getCookie, deleteCookie } from "cookies-next";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.css";

export default function Home() {
  const [profileOptions , setProfileOptions] = useState(false);
  const router = useRouter();

  function closeProfileOptions() {
    setProfileOptions(false);
  }

  function logout() {
    deleteCookie('authorization');
    router.reload();
  }

  function redirect(_path:string) {
    router.push(_path);
  }

  return (
    <main>
      {
        profileOptions ?
        
        <div className={styles.profileOptions}>
          <button onClick={closeProfileOptions} className={styles.closeProfileBtn}>X</button>
          <br /><br />

          <button className={styles.profileButton} onClick={() => {redirect(`/movie/create`)}}>Criação de Filmes</button>
          <button className={styles.logoutBtn} onClick={logout}>Logout</button>
        </div>

        :

        <></>
      }
    
      <nav className={styles.navBar}>

        <img className={styles.homeButton} src="/logo.png" alt="" />

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Pesquisar" />
        </div>

        <img className={styles.userProfile} src="/profilepic.png" alt="" onClick={() => {setProfileOptions(true)}} />
      </nav>

      <div className={styles.container}>

        <div className={styles.card}>
          <img src="/kungfupanda.jpg" alt="" />

          <hr />
          <p>Kung Fu Panda 3</p>
          <p>Dreamworks</p>
          <hr />
          <p>⭐4.8   -   29/01/2016</p>
          <hr />
        </div>

      </div>
    </main>
  );
}

export async function getServerSideProps( {req , res}:any ) {
    try {
        const token = await getCookie('authorization', {req , res});
        if (!token) {
            throw new Error('Invalid Token');
        }
        checkToken(token);

        return {
          // Retorno caso esteja logado
            props: {}
        }
    }
    catch(err) {
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