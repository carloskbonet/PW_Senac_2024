/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkToken } from "@/services/tokenConfig";
import { getCookie } from "cookies-next";


export default function Home() {

  return (
    <main>
      
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