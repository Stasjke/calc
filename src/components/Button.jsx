import React from 'react';
import styles from '../App.module.css';

function Button({ label, value, onClick }) {
	const buttonStyle = value === null ? { pointerEvents: 'none' } : {};

	return (
		<button
			className={styles.Button}
			onClick={onClick}
			data-value={value}
			style={buttonStyle}
		>
			{label}
		</button>
	);
}

export default Button;
