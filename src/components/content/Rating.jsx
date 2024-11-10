import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Content.module.css';

const Rating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div>
      {[...Array(maxRating)].map((_, index) => (
        <FontAwesomeIcon className={styles.rating} key={index} icon={faStar} onClick={() => handleRating(index + 1)}
          style={{
            color: index < rating ? '#ffc107' : 'white',
          }}
        />
      ))}
    </div>
  );
};

export default Rating;