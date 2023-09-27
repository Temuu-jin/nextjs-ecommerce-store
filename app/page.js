import Link from 'next/link';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1 style={{ alignItems: 'center', justifyContent: 'center' }}>
        {' '}
        Welcome to Yazu Sushi{' '}
      </h1>
      <div className={styles.container}>
        <div className={styles.containerCard}>
          <div className={styles.containerCardImg}>
            <img src="/about.jpg" alt="HeroImg" />
          </div>
          <div style={{ width: '5%' }} />
          <div className={styles.containerCardInfo}>
            <div>
              <p>
                Nestled in the vibrant heart of Shepherd Market, Mayfair, Yazu
                Sushi is a hidden gem that offers an exceptional sushi
                experience. Our small, intimate sushi bar is the perfect setting
                for you to savor the artistry of Japanese cuisine.
              </p>
            </div>
            <Link href="/products">Explore Menu -{'>'}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
