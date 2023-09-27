import Image from 'next/image';
import Link from 'next/link';
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
size: string, (optional)
color: string, (optional)
}*/

export default function Products() {
  const product1 = {
    name: 'Nigiri',
    description: 'description1',
    image: 'img',
    price: 20,
    id: 1,
    quantity: 1,
  };
  const product2 = {
    name: 'Hosomaki',
    description: 'description2',
    image: 'img',
    price: 10,
    id: 1,
    quantity: 1,
  };
  const product3 = {
    name: 'Uramaki',
    description: 'description3',
    image: 'img',
    price: 15,
    id: 1,
    quantity: 1,
  };
  const product4 = {
    name: 'Temaki',
    description: 'description4',
    image: 'img',
    price: 90,
    id: 1,
    quantity: 1,
  };
  const products = [{ product1 }, { product2 }, { product3 }, { product4 }];

  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Products</h1>

      <ul className={styles.productGrid}>
        {products.map((product) => (
          <li key={`product-${product.id}`} className={styles.card}>
            <Link href="/product" data-test-id="products-link">
              <Image
                alt="Product"
                src="/product.png"
                width={300}
                height={300}
              />
              <h2>Product</h2>
              <p>Product Description</p>
            </Link>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
