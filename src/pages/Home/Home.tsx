import ArrowRight from '@/assets/icons/arrow.svg?react'
import Title from '@/components/Title/Title'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={`${styles.homeContainer} container`}>
        <Title span="100% Natural Food" title="Choose the best healthier way of life" />
        <button className="button">
          Explore Now
          <ArrowRight />
        </button>
      </div>
    </section>
  )
}

export default Home
