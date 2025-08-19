import React from "react";
import styles from "../css/Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	buttonLabelText: string;
};

function Button({ buttonLabelText, ...rest }: ButtonProps) {
	return (
		<button
			className={styles.btn}
			{...rest}
		>
			{buttonLabelText}
		</button>
	);
}
export default Button;
