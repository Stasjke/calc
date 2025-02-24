import { useState } from 'react';
import styles from './App.module.css';
import NUMS from './components/NUMS.json';
import Button from './components/Button';

function App() {
	// const [count, setCount] = useState(0);
	const [buttons, setButton] = useState(NUMS);

	return (
		<>
			<div className={styles.Calculator}>
				<div className={styles.Display}></div>
				<div className={styles.Keypad}>
					{buttons.map((button) => (
						<Button label={button.label} value={button.value} />
					))}
					{/* <button className={styles.Button}>C</button>
					<button className={styles.Button}>7</button>
					<button className={styles.Button}>4</button>
					<button className={styles.Button}>1</button>
					<button className={styles.Button} data-value="null">
						{' '}
					</button>

					<button className={styles.Button}>+</button>
					<button className={styles.Button}>8</button>
					<button className={styles.Button}>5</button>
					<button className={styles.Button}>2</button>
					<button className={styles.Button}>0</button>

					<button className={styles.Button}>-</button>
					<button className={styles.Button}>9</button>
					<button className={styles.Button}>6</button>
					<button className={styles.Button}>3</button>
					<button className={styles.Button}>=</button> */}
				</div>
			</div>
		</>
	);
}

export default App;
