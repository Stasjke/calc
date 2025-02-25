import styles from '../App.module.css';

function Display({ value, textColor }) {
	return (
		<div className={styles.Display} style={{ color: textColor }}>
			{value}
		</div>
	);
}

export default Display;
