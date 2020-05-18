import React from 'react';
import s from './LastBlock.module.scss';
import newImg from '../LastBlock/img/a.jpg'

const LastBlock = ({children}) => {
    return ( 
    <div className={s.cover} >
        <div className={s.wrap}></div>
        {children} 
        <img src={newImg} />
    </div>
); 
    }

export default LastBlock;