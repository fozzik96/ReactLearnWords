import React from 'react';
import s from './Header.module.scss';

const Header = ({ children}) => {
    return <h1 className={s.Header}>{children}</h1>   
};

export default Header;