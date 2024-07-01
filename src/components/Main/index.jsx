
import { AnimeSection } from "../AnimeSection"
import { MoviesSection } from "../MoviesSection"
import styles from "../Main/Main.style.module.scss"

export const Main = () => {
    return(
        <main>
            <h2>Animes</h2>

            <AnimeSection />

            <h2>Filmes</h2>

            <MoviesSection />
        </main>
    )
}
