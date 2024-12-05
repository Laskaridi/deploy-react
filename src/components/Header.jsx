import React from 'react';
import AvatarHeader from './AvatarHeader';
import DataHeader from './DataHeader';
import styles from './Netflix.module.css';

function Header() {
    let isLogin = true;
    return (
        <>
        <header className={styles.header}>
        <DataHeader></DataHeader>
        <AvatarHeader login={isLogin}></AvatarHeader>
        </header>
        </>
    );
}

export default Header;