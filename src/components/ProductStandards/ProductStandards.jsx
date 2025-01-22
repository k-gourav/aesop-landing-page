import { productStandards } from "../../utils/constants";
import styles from "./ProductStandards.module.css";

const ProductStandards = () => {
    return (
        <section className={styles.product_standards__body}>
        <div className={styles.product_standards__container}>
            {productStandards.map((item) => (
                <div className={styles.product_standards__content} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </section>
    );
}

export default ProductStandards;