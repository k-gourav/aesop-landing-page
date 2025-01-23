import styles from "./ProductQuote.module.css"
const ProductQuote = () => {
    return (
        <section className={styles.product_quote__body}>
            <div className={styles.product_quote__container}>
                <h2 className={styles.product_quote__content}>‘The manner of giving is worth more than the gift.’</h2>
                <p className={styles.product_quote__author}>Pierre Corneille</p>
            </div>
        </section>
    )
}

export default ProductQuote;