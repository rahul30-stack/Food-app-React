import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
//import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bhookad App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src='https://miro.medium.com/max/1838/0*8CoIJ0viQsn4UH4G.jpg' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
