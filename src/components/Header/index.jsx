            
import { GoHomeFill } from "react-icons/go";
import { MdLocalMovies } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { IoGift } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import styles from "../Header/Header.style.module.scss";
import imagePath from "../../assets/logos/driming-logo.png";

export const Header = () => {
    return(
        <header>
            <section className={styles.links}>
                <div>
                    <img className={styles.logo} src={imagePath} alt="logo" />
                </div>

                <nav>
                    <ul>
                        <li>
                            <GoHomeFill />
                            <a href="#">Início</a>
                        </li>
                        <li>
                            <MdLocalMovies />
                            <a href="#">Filmes</a>
                        </li>
                        <li>
                            <RiMovie2Fill />
                            <a href="#">Séries</a>
                        </li>
                        <li>
                            <IoGift />
                            <a href="#">Lançamentos</a>
                        </li>
                        <li>
                            <IoListOutline />
                            <a href="#">Minha Lista</a>
                        </li>
                    </ul>
                </nav>
            </section>

            <section className={styles.infos}>
                <div className={styles.title}>

                    <div>
                        <h1>Pantera negra</h1>
                        
                        <p>Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados.</p>
                    </div>
                        
                    <div className={styles.buttons}>
                        <button className="button-principal">Assistir</button>

                        <button className="button-secundary">Assistir mais tarde</button>
                    </div>
                </div>

                <div className={styles.control}>
                    <span className="A14">A14</span>
                </div>
            </section>
        </header>
    )
}
