import { navItems } from "../../utils/constants.js";
// import { Link } from "react-router-dom";
import searchBar from "../../assets/icons/search-bar.svg"
import styles from './Header.module.css'
const Header = () => {
    return (
        <div>
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

            <ul>
                
            </ul>

        </div>
    )
}

export default Header;