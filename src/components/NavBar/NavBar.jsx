import shopLogo from '/weather-clear.png'
import reactLogo from '../../assets/react.svg'
import styles from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
	  <img src={shopLogo} className="logo" alt="" />
      <ul className={styles.links}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/catalogo">Catálogo</a></li>
		<li><CartWidget /></li>
      </ul>
	  <img src={reactLogo} className="logo react" alt="React logo" />
    </nav>
  );
}

export default Navbar;
