import TopicCard from "entities/topic-card"
import Section from '../section'
import { FC } from "react"
import Topic from 'shared/interfaces/topic'
import Progress from 'shared/interfaces/progress'
import './styles.scss'
import Heading from "widgets/heading"
import Button from "shared/ui/button"

interface IWaySectionProps {
	topics: Topic[]
	progress: Progress
	className: string
}

const WaySection: FC<IWaySectionProps> = ({
	topics,
	progress,
	className
}) => {
	const wayTopics = topics.filter((topic) => topic.section === "Основы работы")

	return (
		<Section
			className={className}
		>
			<div className="waySection__top">
				<Heading className={className}>
					Путь Front End Developer
				</Heading>

				<Button
					text="Скрыть пройденные"
					form="default"
					size="s"
					view="ghost"
				/>

				<div className="waySection__buttonsContainer">
					<Button
						form="round"
						size="s"
						view="ghost"
						className="arrowButton"
					/>
					<Button
						form="round"
						size="s"
						view="ghost"
						className="arrowButton"
					/>
				</div>
			</div>

			<div className="waySection__cardsContainer">
				{wayTopics.map((topic) => (
					<TopicCard
						key={topic.id}
						title={topic.title}
						description={topic.description}
						difficulty={topic.difficulty}
						section={topic.section}
						completedTasks={topic.completed_tasks}
						totalTasks={topic.total_tasks}
						size="default"
						className="waySection__card"
					/>
				))}
			</div>
		</Section>
	)
}

export default WaySection
