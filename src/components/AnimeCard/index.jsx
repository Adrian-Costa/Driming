
import styles from "./Card.style.module.scss"

export const AnimeCard = ({src, txtalt, title, sinopse}) => {
    return(
        <div className={styles.cardContainer}>
            <img src={src} alt={txtalt}/>
            
            <div className={styles.cardInfo}>
                <h3>{title}</h3>
                <p>{sinopse}</p>
            </div>
        </div>
    )
}
