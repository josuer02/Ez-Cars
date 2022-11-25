import { NavLink, Link} from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to='/home' >Ez-Cars</Link>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/home' data-testid="linkEz">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/productos' data-testid="linkPr">
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/cotizar' data-testid="linkCt">
              Cotizar
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/testdrive' data-testid="linkTd">
              Test Drive
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/citas' data-testid="linkCi">
              Citas
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/vender' data-testid="linkVd">
              Vende tu carro
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/reservas' data-testid="linkRes">
              Reservas
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;