import React from 'react';
import { Link } from 'react-router-dom';
import css from './Logo.module.scss';
import LogoSVG from '../ComponentsSVG/LogoSVG';

const Logo = () => {
    return (
        <div className={css.logo}>
            <Link to="/" className={css.logoLink}>
                <LogoSVG className={`logoImg`} fill={"#F3F3F3"} />
                <p className={css.logoText}>Drink Master</p>
            </Link>
        </div>
    )
}

export default Logo
