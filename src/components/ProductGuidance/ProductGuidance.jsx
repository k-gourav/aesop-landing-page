import productGuidanceBanner from "../../assets/images/product-guidance.avif";
import styles from "./ProductGuidance.module.css";
import { Link } from "react-router-dom";
const ProductGuidance = () => {
  return (
    <section className={styles.product_guidance__body}>
      <div className={styles.product_guidance__banner}>
        <img
          className={styles.product_guidance__image}
          src={productGuidanceBanner}
          alt="product-guidance-banner"
        />
      </div>
      <div className={styles.product_guidance__content}>
        <h2>Virtual guidance from home's comfort</h2>
        <p>
          For advice on our range of formulations, we welcome you to book a
          complimentary live consultation. Following your appointment, you will
          receive a bespoke product sample when you place an order.
        </p>
        <button>
          Learn more about this service <img src="" alt="" />
        </button>
      </div>
    </section>
  );
};

export default ProductGuidance;
