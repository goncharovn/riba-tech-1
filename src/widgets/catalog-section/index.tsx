import TopicCard from "entities/topic-card"
import ChoiceGroup from "features/choice-group"
import { FC } from "react"
import Progress from "shared/interfaces/progress"
import Topic from "shared/interfaces/topic"
import Heading from "widgets/heading"
import Section from "widgets/section"
import "./styles.scss"

interface ICatalogSectionProps {
	topics: Topic[]
	progress: Progress
	className?: string
}

const CatalogSection: FC<ICatalogSectionProps> = ({
	topics,
	progress,
	className
}) => {
	return (
		<Section className={className}>
			<Heading className={className}>Каталог тем</Heading>

			<ChoiceGroup />

			<div className="catalogSection__cardsContainer">
				{topics.map((topic) => (
					<TopicCard
						key={topic.id}
						title={topic.title}
						description={topic.description}
						difficulty={topic.difficulty}
						section={topic.section}
						completedTasks={topic.completed_tasks}
						totalTasks={topic.total_tasks}
						size="default"
						className="catalogSection__card"
					/>
				))}
			</div>
		</Section>
	)
}

export default CatalogSection
