import React from 'react';
import styles from './ButtonB.module.css';

function ButtonB() {
    console.log(styles);

    return (
        <button className={styles.button}>
            Button A
        </button>
    )
}

export default ButtonB;
