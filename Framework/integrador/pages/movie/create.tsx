/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "@/styles/createMovie.module.css";
import { useState } from "react";

export default function Page() {
    const [videoURL, setVideoURL]:any = useState("");

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        studio: "",
        releaseDate: "",
        streaming: "",
        ageRating: "",
        duration: "",
        videoURL: "",
        imgURL: ""
    });

    // Função para alterar em tempo real os dados do formulário
    function handleFormEdit(event:any, field:string) {
        setFormData({
            ...formData,
            [field] : event.target.value
        });
    }

    // Call server
    async function formSubmit(event:any) {
        event.preventDefault();
        try {
            const response = await fetch(`/api/action/movie/create`, {
                method: "POST",
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();

            alert(responseData.message);

        }
        catch (err) {
            alert('Algo deu errado');
        }
    }


    function getVideo(e:any) {
        const videoURLExtracted = extractVideoId(e.target.value);

        setVideoURL(videoURLExtracted);
    }

    function extractVideoId(url: string): string | null {
        const regex = /(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    return (
        <main>
            <form className={styles.container} onSubmit={formSubmit}>
                <div className={styles.left}>
                    <input type="text" placeholder="Nome" onChange={(e) => {handleFormEdit(e , 'name')}} /><br />
                    <textarea placeholder="Sinopse" onChange={(e) => {handleFormEdit(e , 'description')}} /><br />
                    <input type="text" placeholder="Studio" onChange={(e) => {handleFormEdit(e , 'studio')}} /><br />
                    <input type="date" placeholder="Data de Lançamento" onChange={(e) => {handleFormEdit(e , 'releaseDate')}} /><br />
                    <select onChange={(e) => {handleFormEdit(e , 'streaming')}}>
                        <option value="">Selecione a plataforma</option>
                        <option value="Netflix">Netflix</option>
                        <option value="Prime Video">Amazon Video</option>
                        <option value="Disney+">Disney+</option>
                        <option value="Paramount">Paramount</option>
                        <option value="HBO Max">HBO</option>
                        <option value="Apple TV">Apple TV</option>
                        <option value="Telecine">Telecine</option>
                        <option value="Crunchyroll">Crunchyroll</option>
                    </select><br />
                    <select onChange={(e) => {handleFormEdit(e , 'ageRating')}}>
                        <option value="">Selecione</option>
                        <option value="18">18 Anos</option>
                        <option value="16">16 Anos</option>
                        <option value="14">14 Anos</option>
                        <option value="12">12 Anos</option>
                        <option value="10">10 Anos</option>
                        <option value="Livre">Livre</option>
                    </select><br />
                    <input type="time" placeholder="Duração" onChange={(e) => {handleFormEdit(e , 'duration')}} /><br />
                    <input type="text" placeholder="URL do trailer (Youtube)" onChange={(e) => { getVideo(e); handleFormEdit(e, 'videoURL'); }} /><br />
                </div>

                <div className={styles.right}>
                    <iframe className={styles.videoFrame} src={`https://www.youtube.com/embed/${videoURL}`}></iframe>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </main>
    );
}