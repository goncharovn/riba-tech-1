import { FC } from "react";
import Button from "shared/ui/button";

interface ICardButton {
	completedTasks: number
	totalTasks: number
}

const CardButton: FC<ICardButton> = ({
	completedTasks,
	totalTasks
}) => {
	let button;

	if (completedTasks === 0) {
		button = (
			<Button
				text="Начать"
				form='default'
				size='m'
				view='primary'
				className="topicCard__button"
			/>
		)
	} else if (completedTasks < totalTasks) {
		button = (
			<Button
				text="Продолжить тему"
				form='default'
				size='m'
				view='primary'
				className="topicCard__button"
			/>
		)
	} else if (completedTasks === totalTasks) {
		const icon = <img src="/assets/images/reload.svg" alt="" />
		button = (
			<Button
				text="Пройти заново"
				leftIcon={icon}
				form='default'
				size='m'
				view='secondary'
				className="topicCard__button"
			/>
		)
	}

	return (
		<>
			{button}
		</>
	)
}

export default CardButton
