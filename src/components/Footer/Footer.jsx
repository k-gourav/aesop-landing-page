import { footerLinks } from '../../utils/constants';
import styles from './Footer.module.css';

const Footer = () => {


    return (
        <footer className={styles.footer}>
            <div className={styles.subscription}>
                <h3>Subscribe to Aesop communications</h3>
                <input
                    type="email"
                    placeholder="Email address"
                    className={styles.emailInput}
                />
                <div className={styles.checkboxWrapper}>
                    <input type="checkbox" id="subscribe" />
                    <label htmlFor="subscribe">
                        Subscribe to receive communications from Aesop. By subscribing, you
                        confirm you have read and understood our{" "}
                        <a href="#" className={styles.link}>privacy policy</a>.
                    </label>
                </div>
            </div>
            <div className={styles.links}>
                {Object.keys(footerLinks).map((section, index) => (
                    <div key={index} className={styles.linkSection}>
                        <h4>{section}</h4>
                        <ul>
                            {footerLinks[section].map((item, idx) => (
                                <li key={idx}>
                                    {item.link ? <a href={item.link} className={styles.link}>
                                        {item.name}
                                    </a> : item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
