import React, { useState } from 'react';
import calculate from '../logic/calculate';
import styles from '../styles/Calculator.module.css';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const operateEvent = (event) => {
    const buttonName = event.target.innerHTML;
    const result = calculate(state, buttonName);
    setState(result);
  };
  const { total, operation, next } = state;
  return (
    <>
      <div className={styles.calculatorMain}>
        <h1 className={styles.calcText}>Lets do some math!</h1>
        <div className={styles.calcContainer}>
          <div id={styles.resultDisplay}>
            {total}
            {operation}
            {next}
          </div>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              AC
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              +/-
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              %
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.operation}`}
              onClick={operateEvent}
            >
              ÷
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              7
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              8
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              9
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.operation}`}
              onClick={operateEvent}
            >
              x
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              4
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              5
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              6
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.operation}`}
              onClick={operateEvent}
            >
              -
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              1
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              2
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              3
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.operation}`}
              onClick={operateEvent}
            >
              +
            </button>
          </div>
          <div className={styles.lastRow}>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              0
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={operateEvent}
            >
              .
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.operation}`}
              onClick={operateEvent}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
