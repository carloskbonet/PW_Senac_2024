/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "@/styles/createMovie.module.css";
import { useState } from "react";

export default function Page() {
    const [videoURL, setVideoURL]:any = useState("");

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
            <form className={styles.container}>
                <div className={styles.left}>
                    <input type="text" placeholder="Nome" /><br />
                    <textarea placeholder="Sinopse" /><br />
                    <input type="text" placeholder="Studio" /><br />
                    <input type="date" placeholder="Data de Lançamento" /><br />
                    <select>
                        <option value="">Netflix</option>
                        <option value="">Amazon Video</option>
                        <option value="">Disney+</option>
                        <option value="">Paramount</option>
                        <option value="">HBO</option>
                        <option value="">Star+</option>
                    </select><br />
                    <select>
                        <option value="">18 Anos</option>
                        <option value="">16 Anos</option>
                        <option value="">14 Anos</option>
                        <option value="">12 Anos</option>
                        <option value="">10 Anos</option>
                        <option value="">Livre</option>
                    </select><br />
                    <input type="time" placeholder="Duração" /><br />
                    <input type="text" placeholder="URL do trailer (Youtube)" onChange={getVideo} /><br />
                </div>

                <div className={styles.right}>
                    <iframe className={styles.videoFrame} src={`https://www.youtube.com/embed/${videoURL}`}></iframe>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </main>
    );
}