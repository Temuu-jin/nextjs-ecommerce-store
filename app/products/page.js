import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products.js';
import styles from '../page.module.scss';

/* A Products page (where all the products are listed)
- Minimum of 4 different products
- The page should have a relevant `h1` element
- Each product (incl. product name and image) needs to be contained in an anchor element (a link) with an attribute of `data-test-id="product-<product id>"`
  - This link will lead to its single product page
- The header (described below) needs to have a link to the products page with the HTML attribute `data-test-id="products-link"`

Product Attributes: {
name: string,
description: string,
image: img,
price: number,
id: number,
quantity: number,
type: string,
}*/

export default function Products() {
  const products = getProducts();

  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Products</h1>

      <ul className={styles.productGrid}>
        {products.map((product) => (
          <li key={`product-${product.id}`} className={styles.card}>
            <Link
              href={`/products/${product.slug}`}
              data-test-id="products-link"
            >
              <Image
                alt="Product"
                src={product.image}
                width={120}
                height={100}
              />
              <h2>{product.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
