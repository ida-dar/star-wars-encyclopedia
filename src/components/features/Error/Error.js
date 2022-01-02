import React from "react";
import styles from './Error.module.scss';

const Error = () => {
  return(
    <>
      <div className={styles.error}>
        <p>There was an error while loading data. Please reload the page.</p>
        <iframe src="https://giphy.com/embed/l2JJnE17UfKTwCb3G" width="100%" height="500" frameBorder="0" className={styles.img} title="crash"></iframe>
      </div>
    </>
  )
}

export default Error;
