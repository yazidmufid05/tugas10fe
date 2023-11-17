import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"


function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Yazid.Cinema</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__title} to={"/"}>Home</Link></li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__title} to={"/add"}>Add Movie</Link></li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__title} to={"/popular"}>Popular</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;