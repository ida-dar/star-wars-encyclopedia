import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../../assets/icons/starWars.svg';

const links = [
  {
    path: '/planets',
    name: 'Planets',
  },
  {
    path: '/people',
    name: 'People',
  },
  {
    path: '/films',
    name: 'Films',
  },
  {
    path: '/starships',
    name: 'Starships',
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
  },
  {
    path: '/species',
    name: 'Species',
  }
];

const Header = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className={styles.component}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-sm-12'>
            <Link to='/'>
              <Logo />
              <p className={styles.logo}> encyclopedia</p>
            </Link>
          </div>
          {/* <div className={`${styles.icons} col-2`}>
            <i className="fab fa-old-republic" />
            <i className='fab fa-jedi-order' />
            <i className={`${styles.button} fas fa-bars`} onClick={() => setNavbarOpen(!navbarOpen)} />
            <i className="fab fa-galactic-senate"></i>
            <i className="fab fa-galactic-republic" />
          </div> */}
          <div className='col-lg-6 col-sm-12'>
            <i className={`${styles.button} fas fa-bars`} onClick={() => setNavbarOpen(!navbarOpen)} />
            <nav className={`${styles.nav} ${navbarOpen ? styles.opened : ''}`}>
              {links.map(link => (
                <NavLink key={link.name} className={styles.navlink} to={`${process.env.PUBLIC_URL}${link.path}`} onClick={handleClick}><span>{link.name}</span></NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
