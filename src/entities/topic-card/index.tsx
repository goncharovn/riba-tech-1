import "./styles.scss"
import cn from "classnames"
import { FC } from "react"
import CardButton from "entities/card-button"
import CardProgress from "entities/card-progress"

interface ITopicCardProps {
	title: string
	description: string
	difficulty: string
	section: string
	completedTasks: number
	totalTasks: number
	size: string
	className?: string
}

const TopicCard: FC<ITopicCardProps> = ({
	title,
	description,
	difficulty,
	section,
	completedTasks,
	totalTasks,
	size,
	className
}) => {
	return (
		<div className={
			cn(
				"topicCard",
				`topicCard_size_${size}`,
				{ [`${className}`]: className }
			)
		}>
			<CardProgress
				completedTasks={completedTasks}
				totalTasks={totalTasks}
				size={size}
			/>

			<div className="topicCard__content">
				<h3 className="topicCard__heading">{title}</h3>

				<div className="topicCard__tags">
					<span className="topicCard__tag">{difficulty}</span>
					<span className="topicCard__tag">{section}</span>
				</div>

				<p className="topicCard__description">{description}</p>
			</div>

			<CardButton
				completedTasks={completedTasks}
				totalTasks={totalTasks}
			/>
		</div>
	)
}

export default TopicCard
