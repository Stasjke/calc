import { useState } from 'react';
import styles from '../App.module.css';
import Button from './Button';
import NUMS from './NUMS.json';

function Keypad({ onButtonClick }) {
	const [buttons, setButtons] = useState(NUMS);

	return (
		<div className={styles.Keypad}>
			{buttons.map((button) => (
				<Button
					key={button.id}
					label={button.label}
					value={button.value}
					onClick={() => onButtonClick(button.value)}
				/>
			))}
		</div>
	);
}

export default Keypad;
