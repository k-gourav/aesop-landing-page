import productGiftBanner from "../../assets/images/product-gift-sleeve.jpg";
import styles from "./ProductGiftSleeve.module.css";

const ProductGiftSleeve = () => {
  return (
    <section className={styles.product_gift__body}>
      <div className={styles.product_gift__content}>
        <h3>Festive giving</h3>
        <h2>A complimentary sleeve for your gifts</h2>
        <p>
          Inspired by the verve of the season, a specially designed gift sleeve
          will swaddle your purchases when you select the ‘gift packaging’
          option at checkout. Exclusions apply.
        </p>
        <button>
          Explore gifts <img src="" alt="" />
        </button>
      </div>
      <div className={styles.product_gift__banner}>
        <img
          className={styles.product_gift__image}
          src={productGiftBanner}
          alt="product-gift-banner"
        />
      </div>
    </section>
  );
};

export default ProductGiftSleeve;
