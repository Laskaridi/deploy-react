import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Netflix.module.css'

function AvatarHeader(props) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
      };
    
      const inputChange = (e) => {
        setQuery(e.target.value);
      };
    
      if(props.login){
    return (
        <div className={styles.avatar}>
            <div className={styles.search}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={styles.iconHeader} onClick={toggleSearch} />
            </div>
            {searchOpen && (
                <input type="text" value={query} onChange={inputChange} placeholder="Search" className={styles.inputSearch} />
            )}
            
            <img className={styles.imgAvatar} src='/avatar.png' alt='avatar'></img>
        </div>
    );
  }
  else{
    return (
        <button className={styles.loginButton}>
            Log in
        </button>
    )
  }
}

export default AvatarHeader;

