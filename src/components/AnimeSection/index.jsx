
import { AnimeCard } from "../AnimeCard/index.jsx"
import styles from "../AnimeSection/AnimeSection.style.module.scss"
import OnePiece from "../../assets/animes/one-piece.jpg";
import Bleach from "../../assets/animes/bleach.png";
import DeathNote from "../../assets/animes/death-note.jpg";
import DemonSlayer from "../../assets/animes/demon-slayer.jpg";
import HunterxHunter from "../../assets/animes/hunter-hunter.jpg";
import JujutsoKaisen from "../../assets/animes/jujutso-kaisen.jpg";
import NanatsuNoTaizai from "../../assets/animes/nanatsu-no-taizai.jpg";
import OnePunchMan from "../../assets/animes/one-punch-man.jpg";
import SpyFamily from "../../assets/animes/spy-family.jpg";

export const AnimeSection = () => {
    return(
        <section className={styles.animeSection}>
            <AnimeCard src={OnePiece} txtalt="One Piece card" title="One Piece" sinopse="Adaptada da série de manga homônima, One Piece é um anime que conta a história do jovem Monkey D. Luffy, que ganhou poderes de borracha depois de comer uma fruta do diabo."/>
            <AnimeCard src={Bleach} txtalt="Bleach card" title="Bleach" sinopse="Em Bleach, Ichigo Kurosaki é um estudante de ensino médio incomum: desde pequeno, ele consegue ver fantasmas. Sua vida muda completamente quando ele e suas duas irmãs são atacados por um espírito maligno e recebem ajuda de uma shinigami, chamada Rukia Kuchiki."/>
            <AnimeCard src={SpyFamily} txtalt="Spy Family card" title="Spy Family" sinopse="Loid, Yor e a filha adotiva Anya realizaram uma típica viagem de fim de semana em família. O que o agente secreto Loid não contava era que a menina com poderes de telepatia se envolveria, por engano, com uma perigosa organização."/>
            <AnimeCard src={JujutsoKaisen} txtalt="Jujutsu Kaisen card" title="Jujutsu Kaisen" sinopse="Em Jujutsu Kaisen, a vida de um adolescente é virada de cabeça para baixo após entrar em contato com um talismã amaldiçoado. No conceituado anime, o adolescente Yuuji Itadori participa de um clube de ocultismo e acaba se envolvendo com um item perigoso, um dedo amaldiçoado."/>
            <AnimeCard src={NanatsuNoTaizai} txtalt="Nanatsu No Taizai card" title="Nanatsu no Taizai" sinopse="Nanatsu no Taizai é um anime japonês baseado na série de mangá de mesmo nome escrito e ilustrado por Nakaba Suzuki. O anime segue Elizabeth, a terceira princesa do Reino de Liones, que está a procura dos Sete pecados capitais, um grupo de ex-cavaleiros sagrados que foram separados depois que o reino foi derrubado."/>
            <AnimeCard src={DemonSlayer} txtalt="Demon Slayer card" title="Demon Slayer" sinopse="Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. E, para piorar, Nezuko, sua irmã mais nova e única sobrevivente, também acabou transformada em um demônio."/>
            <AnimeCard src={HunterxHunter} txtalt="Hunter X Hunter card" title="Hunter X Hunter" sinopse="Em Hunter x Hunter, o jovem Gon se apega ao legado de seu desconhecido pai e sonha em se tornar um Hunter, um caçador de tesouros e artefatos místicos. Ao descobrir que o pai está vivo, ele sai em uma missão para encontrá-lo enquanto tenta se tornar um Hunter profissional."/>
            <AnimeCard src={DeathNote} txtalt="Death Note card" title="Death Note" sinopse="Um estudante de repente encontra um caderno que caiu do céu. Trata-se do Death Note, que permite ao seu portador matar qualquer pessoa a partir da mera anotação do nome do alvo em uma de suas páginas."/>
            <AnimeCard src={OnePunchMan} txtalt="One Punch Man card" title="One Punch Man" sinopse="One Punch Man acompanha Saitama, um jovem oficial incrivelmente forte que possui a força necessária para derrotar vilões com um único soco. Devido à sua incomparável força, ele se tornou entediado e busca por adversários que possam igualmente contra ele."/>
        </section>
    )
}
