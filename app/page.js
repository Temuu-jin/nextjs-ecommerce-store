import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <div className={styles.heroSection}>
        <Image alt="Product" src="/product.png" width={300} height={300} />
        <div className={styles.heroText}>Hero Text Welcome!</div>

        <Link href="/products" className={styles.heroButton}>
          Explore Products
        </Link>
      </div>
    </main>
  );
}
