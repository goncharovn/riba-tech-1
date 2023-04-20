import { useEffect, useState } from "react"
import Progress from "shared/interfaces/progress"

import DB from 'db.json'
import RecommendSection from "widgets/recommend-section"
import WaySection from "widgets/way-section"
import CatalogSection from "widgets/catalog-section"

const MyTrainingPage = () => {
	const topics = DB.topics

	const [progress, setProgress] = useState<Progress>({})

	useEffect(
		() => {
			const progress = DB.topics.reduce((obj: Progress, topic) => {
				obj[topic.id] = topic.completed_tasks
				return obj
			}, {})
			setProgress(progress)
		},
		[]
	)

	return (
		<>
			<RecommendSection
				topics={topics}
				progress={progress}
				className='recommendSection'
			/>

			<WaySection
				topics={topics}
				progress={progress}
				className='waySection'
			/>

			<CatalogSection
				topics={topics}
				progress={progress}
				className='catalogSection'
			/>
		</>
	)
}

export default MyTrainingPage
