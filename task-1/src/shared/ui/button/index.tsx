import "./styles.scss"
import cn from "classnames"
import { FC } from "react"

interface IButtonProps {
	text?: string,
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	form: string
	size: string
	view: string
	className?: string
}

const Button: FC<IButtonProps> = ({
	text,
	leftIcon,
	rightIcon,
	form,
	size,
	view,
	className
}) => {
	const classes = cn(
		"button",
		`button_form_${form}`,
		`button_size_${size}`,
		`button_view_${view}`,
		{ [`${className}`]: className }
	)

	return (
		<button
			className={classes}
		>
			{leftIcon}
			<span
				className={cn(
					"button__text",
					{ "button__text_leftIcon": leftIcon },
					{ "button__text_rightIcon": rightIcon }
				)}
			>
				{text}
			</span>
			{rightIcon}
		</button>
	)
}

export default Button
