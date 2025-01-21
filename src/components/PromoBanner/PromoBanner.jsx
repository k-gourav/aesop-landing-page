import plusIcon from '../../assets/icons/plus-icon.svg';
import styles from "./PromoBanner.module.css";

const PromoBanner = () => {
  return (
    <div className={styles.promo__body}>
      <button className={styles.promo__btn}>
        <p className={styles.promo__content}>
        Enjoy complimentary shipping and a pack of red envelopes with every deliver-to-door orders over HKD 900 by entering NY25 at checkout.
        </p>
        <img className={styles.promo__icon} src={plusIcon} alt="plus-icon" />
      </button>
    </div>
  );
};

export default PromoBanner;
