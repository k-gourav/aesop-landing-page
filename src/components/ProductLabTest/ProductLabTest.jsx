import productTestBanner from "../../assets/images/aesop-lab-expt.avif"
import styles from "./ProductLabTest.module.css";
import { Link } from "react-router-dom"
const ProductLabTest = () => {
  return (
    <section className={styles.product_test__body}>
      <div className={styles.product_test__banner}>
        <img className={styles.product_test__image} src={productTestBanner} alt="product-lab-testing-banner" />
      </div>
      <div className={styles.product_test__content}>
        <h3>The Athenaeum</h3>
        <h2>Skin care protagonists: Vitamin C</h2>
        <p>
          In this series, we take a closer look at some of the ingredients that
          we’ve returned to time and again, beginning with anti-oxidant-rich
          Vitamin C.
        </p>
        <button>Continue reading <img src="" alt="" /></button>
      </div>
    </section>
  );
};

export default ProductLabTest;
