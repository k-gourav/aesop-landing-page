import rightArrow from "../../assets/icons/right-arrow-browse.svg";
import { skinCareSwiper } from "../../utils/constants";
import styles from './SkinCareProduct.module.css'
const SkinCareProduct = () => {
    return (
        <section>
        <div className={styles.skincare_product__body}>
            <div className={styles.skincare_product__content}>
                <h3>Skin Care+</h3>
                <h2>Intensive formulations for complex skin</h2>
                <p>Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.</p>
                <button>Browse formulations <img src={rightArrow} alt="right-arrow" /></button>
            </div>

                {skinCareSwiper.map((item) => (
                    <div key={item.class} className={`styles.skincare__${item.class}`}>
                    <img className={`styles.skincare_pic__${item.class}`} src={item.url} alt={item.alt} />
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>

                ))}
        </div>
        
        </section>
    );
}

export default SkinCareProduct;