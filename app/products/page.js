import Image from 'next/image';
import styles from '../page.module.scss';

/* A Products page (where all the products are listed)
- Minimum of 4 different products
- The page should have a relevant `h1` element
- Each product (incl. product name and image) needs to be contained in an anchor element (a link) with an attribute of `data-test-id="product-<product id>"`
  - This link will lead to its single product page
- The header (described below) needs to have a link to the products page with the HTML attribute `data-test-id="products-link"` */

export default function Products() {
  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Products</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Image alt="Product" src="/product.png" width={300} height={300} />
          <h2>Product</h2>
          <p>Product Description</p>
          <button>Add to Cart</button>
        </div>
        <div className={styles.card}>
          <Image alt="Product" src="/product.png" width={300} height={300} />
          <h2>Product</h2>
          <p>Product Description</p>
          <button>Add to Cart</button>
        </div>
        <div className={styles.card}>
          <Image alt="Product" src="/product.png" width={300} height={300} />
          <h2>Product</h2>
          <p>Product Description</p>
          <button>Add to Cart</button>
        </div>
        <div className={styles.card}>
          <Image alt="Product" src="/product.png" width={300} height={300} />
          <h2>Product</h2>
          <p>Product Description</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </main>
  );
}
