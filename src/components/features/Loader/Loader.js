import React from "react";
import styles from './Loader.module.scss';

const Loader = () => {
  return(
    <div className={styles.container}>
      <span className={styles.loader}>
        <span className={styles.left}><span className={styles.animated}></span></span>
        <span className={styles.right}><span className={styles.animated}></span></span>
      </span>
    </div>
  )
}

export default Loader;
