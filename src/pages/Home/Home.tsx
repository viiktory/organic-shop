import ArrowRight from '@/assets/icons/arrow.svg?react'
import styles from './Home.module.css'
import { About } from '@/pages'

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <div className={`${styles.home__box} container`}>
          <span className={styles.home__span}>100% Natural Food</span>
          <h1 className={styles.home__title}>
            Choose the best <br /> healthier way <br /> of life
          </h1>
          <button className="button">
            Explore Now
            <ArrowRight />
          </button>
        </div>
      </section>
      <About />
    </>
  )
}

export default Home
