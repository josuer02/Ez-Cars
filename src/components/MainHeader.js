import { NavLink, Link} from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to='/home'>Ez-Cars</Link>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/home'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/productos'>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/cotizar'>
              Cotizar
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/contactenos'>
              Contactenos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/citas'>
              Citas
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/vender'>
              Vende tu carro
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;