import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import car from '../../assets/car.png';

const Header = () => {
    return (
      <header className={styles.container}>
        <div className={styles.logo}>
          VinDecoder
          <img className={styles.logo_img} src={car} alt="" />
        </div>
        <div className={styles.navigation}>
          <Link className={styles.navigation_link} to={"/"}>
            Home
          </Link>
          <Link className={styles.navigation_link} to={"/variables"}>
            Variables
          </Link>
        </div>
      </header>
    );
};

export default Header;