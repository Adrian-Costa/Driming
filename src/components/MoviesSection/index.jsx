
import styles from "../MoviesSection/MoviesSection.style.module.scss"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Halloween from "../../assets/movies/halloween-kills-o-terror-continua.webp";

export const MoviesSection = () => {
    const [ slidePerView, setSlidePerView ] = useState(4)

    useEffect(() => {
        function handleResize(){
            if (window.innerWidth < 700) {
                setSlidePerView(1);
            } else if (window.innerWidth < 900) {
                setSlidePerView(2);
            } else if (window.innerWidth < 1200) {
                setSlidePerView(3);
            }else {
                setSlidePerView(4)
            }
        }
        handleResize()

        window.addEventListener("resize", handleResize)

        return() => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return(
        <>
            <section className={styles.moviesSection}>
                <Swiper  className={styles.slideContainer} 
                slidesPerView={slidePerView} 
                pagination={{ clickable: true }} 
                navigation >
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src={Halloween} alt="halloween-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/hereditário.webp" alt="hereditário-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/jogos-mortais-6.webp" alt="jogos-mortais-6-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/rogai-por-nós.webp" alt="rogai-por-nós-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/o-massacre-da-serra-elétrica.webp" alt="o-massacre-da-serra-elétrica-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/o-albergue.webp" alt="o-albergue-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/livrai-nos-do-mal.webp" alt="livrai-nos-do-mal-thumb" />
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className={styles.moviesSection}>
                <Swiper className={styles.slideContainer} 
                    slidesPerView={slidePerView} 
                    pagination={{ clickable: true }} 
                    navigation >
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/livrai-nos-do-mal.webp" alt="livrai-nos-do-mal-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/o-albergue.webp" alt="o-albergue-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/o-massacre-da-serra-elétrica.webp" alt="o-massacre-da-serra-elétrica-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/halloween-kills-o-terror-continua.webp" alt="halloween-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/rogai-por-nós.webp" alt="rogai-por-nós-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/jogos-mortais-6.webp" alt="jogos-mortais-6-thumb" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideItemContainer}>
                        <img className={styles.slideItem} src="src/images/movies/hereditário.webp" alt="hereditário-thumb" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </> 
    )
}
