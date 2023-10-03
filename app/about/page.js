import Link from 'next/link';
import styles from '../page.module.scss';

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About</h1>
      <div className={styles.container}>
        <div className={styles.containerCard}>
          <div className={styles.containerCardInfo}>
            <div>
              <p>
                At Yazu Sushi, we are committed to using only the freshest and
                finest ingredients to create sushi that's not just a meal but a
                work of art. Our talented chefs take pride in crafting each
                roll, ensuring every bite bursts with flavor and freshness.
              </p>
            </div>
          </div>
          <div style={{ width: '10%' }} />
          <div className={styles.containerCardImg}>
            <img src="/plate1.jpg" alt="HeroImg" />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerCard}>
          <div className={styles.containerCardImg}>
            <img src="/plate2.jpg" alt="HeroImg" />
          </div>
          <div style={{ width: '10%' }} />
          <div className={styles.containerCardInfo}>
            <div>
              <p>
                Experience the joy of Kaiten style dining at Yazu Sushi, where
                you can watch the masterful creation of your sushi before your
                eyes. Our friendly and knowledgeable staff are here to guide
                you, whether you're a first-time sushi explorer or a seasoned
                connoisseur.
              </p>
            </div>
            <Link href="/products">Explore Menu -{'>'}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
