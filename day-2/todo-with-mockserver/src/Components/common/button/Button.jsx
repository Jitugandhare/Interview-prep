import styles from './Button.module.css';

function Button({children,onClick}) {
  return <button data-testid="common-button" onClick={onClick} className={styles.button}>{children} </button>;
}

export default Button;
