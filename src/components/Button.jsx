import React, { Component } from 'react';
import styles from '../App.module.css';

class Button extends Component {
	render() {
		// const { label, value, onClick } = this.props;

		return (
			<button
				className={styles.Button}
				onClick={this.props.onClick}
				data-value={this.props.value}
			>
				{this.props.label}
			</button>
		);
	}
}

export default Button;
