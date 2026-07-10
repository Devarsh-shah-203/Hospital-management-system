import styles from "./CurrentToken.module.css";

function CurrentToken({ token }) {
  return (
    <div className={styles.card}>
      <h3>Current Token</h3>

      <h1>{token}</h1>
    </div>
  );
}

export default CurrentToken;