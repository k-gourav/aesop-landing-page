import productCorporateGift from "../../assets/images/corporate-gifts.avif";
import styles from "./ProductCorporateGift.module.css";
import { Link } from "react-router-dom";
const ProductCorporateGift = () => {
  return (
    <section className={styles.product_gift__body}>
      <div className={styles.product_gift__banner}>
        <img
          className={styles.product_gift__image}
          src={productCorporateGift}
          alt="product-corporate-gift-banner"
        />
      </div>
      <div className={styles.product_gift__content}>
        <h3>Tokens of appreciation</h3>
        <h2>Corporate gifts</h2>
        <p>
          Find a variety of gift-giving options, ideal for honouring treasured
          colleagues and clients. Trained consultants will be pleased to guide
          your selections and assist with delivery.
        </p>
        <button>
          Learn more about this service <img src="" alt="" />
        </button>
      </div>
    </section>
  );
};

export default ProductCorporateGift;
