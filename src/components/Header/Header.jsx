import css from './Header.module.css'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
      <header className={css.header}>
      <Link to="/" className={css.logo}>Alicja</Link>
        <nav>
        <ul className={css.menu}>
          <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? css.active : undefined}>About</NavLink>
          </li>
          <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? css.active : undefined}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      </header>
    );
  }
  
  export default Header;