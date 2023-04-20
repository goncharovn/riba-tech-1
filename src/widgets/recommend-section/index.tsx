import TopicCard from "entities/topic-card"
import Section from '../section'
import { FC } from "react"
import Topic from 'shared/interfaces/topic'
import Progress from 'shared/interfaces/progress'
import './styles.scss'
import Heading from "widgets/heading"
import Button from "shared/ui/button"

interface IRecommendSectionProps {
	topics: Topic[]
	progress: Progress
	className: string
}

const RecommendSection: FC<IRecommendSectionProps> = ({
	topics,
	progress,
	className
}) => {
	const icon = <img
		className="moreButton__img"
		src="./assets/images/arrow.svg"
		width="9.2"
		height="7.71"
		alt=""
	/>

	return (
		<Section
			className={className}
		>
			<Heading
				className={className}
			>
				Рекомендуемые темы
			</Heading>

			<div className="recommendSection__cardsContainer">
				<TopicCard
					title={topics[1].title}
					description={topics[1].description}
					difficulty={topics[1].difficulty}
					section={topics[1].section}
					completedTasks={progress['2']}
					totalTasks={topics[1].total_tasks}
					size="large"
				/>
			</div>

			<div className="recommendSection__more">
				<hr className="line" />

				<Button
					text="Показать ещё"
					rightIcon={icon}
					form="default"
					size="s"
					view="ghost"
					className="moreButton"
				/>

				<hr className="line" />
			</div>
		</Section>
	)
}

export default RecommendSection
