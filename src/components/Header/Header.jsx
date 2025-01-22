import { navItems } from "../../utils/constants.js";
// import { Link } from "react-router-dom";
import searchBar from "../../assets/icons/search-bar.svg"
import styles from './Header.module.css'
const Header = () => {
    return (
        <header>
            <nav className={styles.primary__header}>
            <ul className={styles.primary__navbar}>
                {navItems.map((item) => (
                    <li key={item.name}>
                        {/* <Link to={`/${item.link}`} className={styles.primary__navlink}>
                            {item.name}
                        </Link> */}
                        {item.name}
                    </li>
                ))}
                <li><button><img src={searchBar} alt="" /></button></li>
            </ul>

            <ul className={styles.secondary__navbar}>
                <li>Log in</li>
                <li>Cabinet</li>
                <li>Cart</li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;