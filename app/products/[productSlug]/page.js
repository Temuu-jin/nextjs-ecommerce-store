import { getProduct } from '../../../database/products';
import styles from '../../page.module.scss';

export default function ProductPage(props) {
  const singleProduct = getProduct(props.params.productSlug);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>{singleProduct.name}</h1>
      <p>{singleProduct.description}</p>
      <img
        src={singleProduct.image}
        alt={singleProduct.name}
        width={200}
        height={200}
      />
      <p>€ {singleProduct.price}</p>
      <p>{singleProduct.type}</p>
      <label>
        Quantity:{' '}
        <input
          type="number"
          name="quantity"
          min="1"
          max="100"
          defaultValue="1"
        />
      </label>

      <button className={styles.button}>Add to Cart</button>
    </div>
  );
}
