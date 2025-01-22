import productOfferBanner from "../../assets/images/product-offer.mp4";
import styles from "./ProductOffering.module.css";

const ProductOffering = () => {
  return (
    <section className={styles.product_offer__body}>
      <aside className={styles.product_offer__content}>
        <h3>Our online offering </h3>
        <h2>Gestures to enhance your experience</h2>
        <p>
          Discover a suite of complimentary additions available with every
          order, including curated product samples, gift wrapping in our
          signature cotton bag and personalised gift messaging. 
        </p>
        <button>
          Explore our online offering <img src="" alt="" />
        </button>
      </aside>
      <div className={styles.product_offer__banner}>
        <video
          className={styles.product_offer__video}
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
          data-testid="data-testid-VideoPlayer"
          src={productOfferBanner}
        >
          <source src={productOfferBanner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ProductOffering;
