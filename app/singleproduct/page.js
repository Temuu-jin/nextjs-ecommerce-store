import Image from 'next/image';
/* A page for each single product (when you click on the product it goes to this page) with ability to add a quantity to the cart
  - The single product URL needs to contain the `id` (eg. `/products/<product id>`)
  - The product name needs to be directly inside an `h1` element (it should be the only `h1`)
  - The product image needs to be in an `img` element with the HTML attribute `data-test-id="product-image"`
  - The product price (without any currency symbol or thousands separator) needs to be directly inside an element with the HTML attribute `data-test-id="product-price"`
  - The quantity input needs to have the HTML attribute `data-test-id="product-quantity"`
    - The starting quantity should be `1`
  - The add to cart button needs to have the HTML attribute `data-test-id="product-add-to-cart"`
    - Clicking this button will add the amount from the product quantity input to any quantity of this product already in the cart
      - For example, if the amount in the product quantity input is `2` and the existing quantity of this product in the cart is `3`, then after clicking the button, the quantity of this product in the cart will become `5`
  - Negative quantity values should not be possible */
import styles from '../page.module.scss';

export default function SingleProduct() {
  return (
    <main className={styles.main}>
      <h1>Product</h1>
      <div className={styles.card}>
        <Image alt="Product" src="/product.png" width={300} height={300} />
        <p>Description</p>
      </div>
    </main>
  );
}
