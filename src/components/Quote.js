import React from 'react';
import styles from '../styles/Quote.module.css';

function Quote() {
  return (
    <>
      <p className={styles.quoteText}>
        Mathematics, rightly viewed, possesses not only truth, but supreme
        beauty — a beauty cold and austere, like that of sculpture, without
        appeal to any part of our weaker nature, without the gorgeous trappings
        of painting or music, yet sublimely pure, and capable of a stern
        perfection such as only the greatest art can show.
        <br />
        <br />
        <p className={styles.quoteOwner}>~ Bertrand Russell</p>
      </p>
    </>
  );
}

export default Quote;
