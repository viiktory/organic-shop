import styles from './Advertising.module.css'

const Advertising = () => {
  return (
    <section className={`${styles.advertising} container`}>
      <div className={styles.advertisingBox1}>
        <span className={styles.advertisingTitle}>Natural!!</span>
        <h3 className={styles.advertisingTitle}>Get garden fresh fruits</h3>
      </div>
      <div className={styles.advertisingBox2}>
        <span className={styles.advertisingTitle}>Offer!!</span>
        <h3 className={styles.advertisingTitle}>Get 10% off on Vegetables</h3>
      </div>
    </section>
  )
}

export default Advertising
