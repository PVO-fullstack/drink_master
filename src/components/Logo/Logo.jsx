import React from 'react';
import { Link } from 'react-router-dom';
import css from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={css.logo}>
            <Link to="/" className={css.logoLink}>
                <img src="/images/SVG/logo.svg" alt="Logo" className={css.logoImg} width="28" height="28"></img>
                <p className={css.logoText}>Drink Master</p>
            </Link>
        </div>
    )
}

export default Logo
