import { useState } from 'react';
import styles from '../App.module.css';
import Keypad from './Keypad.jsx';
import Display from './Display.jsx';

function Calculator() {
	const [displayValue, setDisplayValue] = useState('');
	const [colorText, setColorText] = useState('#80c9c9');

	const calculateResult = (operation) => {
		try {
			if (!operation) return '';

			const cleanOperation = operation
				.replace(/\s+/g, '')
				.replace(/(\+|-){2,}/g, '$1');

			const parts = cleanOperation.split(/(\+|-)/).filter((part) => part !== '');

			if (parts.length === 0) return '';

			let result = Number(parts[0]); // берем 0 индекс за начало сбора и первого из значений operation

			for (let i = 1; i < parts.length; i += 2) {
				const operator = parts[i];
				let number = Number(parts[i + 1]); // начало второго значения выражения будет с i + 1

				if (isNaN(number)) {
					return 'Error';
				}
				if (operator === '+') {
					result += number;
				} else if (operator === '-') {
					result -= number;
				}
			}

			return result;
		} catch (error) {
			return 'Error';
		}
	};
	const handleButtonClick = (value) => {
		switch (value) {
			case 'C':
				setDisplayValue('');
				setColorText('');
				break;
			case '=':
				setColorText('red');
				setDisplayValue(calculateResult(displayValue).toString());
				break;
			default:
				setDisplayValue((prevValue) => prevValue + String(value));
				setColorText('');
		}
	};

	return (
		<>
			<div className={styles.Calculator}>
				<Display value={displayValue} textColor={colorText} />
				<Keypad onButtonClick={handleButtonClick} />
			</div>
		</>
	);
}

export default Calculator;
