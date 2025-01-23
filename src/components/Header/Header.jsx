import { primaryNavItems, secondaryNavItems } from "../../utils/constants.js";
// import { Link } from "react-router-dom";
import searchBar from "../../assets/icons/search-bar.svg"
import styles from './Header.module.css'
const Header = () => {
    return (
        <header>
            <nav className={styles.primary__header}>
            <ul className={styles.primary__navbar}>
                {primaryNavItems.map((item) => (
                    <li key={item.name}>
                        {/* <Link to={`/${item.link}`} className={styles.primary__navlink}>
                            {item.name}
                        </Link> */}
                        {item.name}
                    </li>
                ))}
                <li><button className={styles.primary__search}><img src={searchBar} alt="search-bar" /></button></li>
            </ul>

            <ul className={styles.secondary__navbar}>
                {secondaryNavItems.map((item) => (
                    <li key={item.name}>
                        {item.name}
                    </li>
                ))}
            </ul>
            </nav>
        </header>
    )
}

export default Header;