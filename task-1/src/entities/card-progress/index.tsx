import { FC } from "react"
import cn from "classnames"

interface ICardProgress {
	completedTasks: number
	totalTasks: number
	size: string
}

const CardProgress: FC<ICardProgress> = ({
	completedTasks,
	totalTasks,
	size
}) => {
	let progress;

	if (completedTasks === 0) {
		progress = (
			<span className="progress__value">
				<span className="progress__count">{totalTasks}</span>
				<span className="progress__text">заданий</span>
			</span>
		)
	} else if (completedTasks < totalTasks) {
		progress = (
			<>
				<span className="progress__value">
					<span className="progress__count">{completedTasks}/{totalTasks}</span>
					<span className="progress__text">заданий</span>
				</span><span className="progress__icon">
					<svg
						className="svg"
						viewBox="77 77 154 154"
					>
						<circle
							className="circle"
							cx="154"
							cy="154"
							r="69"
							fill="none"
							strokeWidth="16"
						>
						</circle>

						<circle
							className="circle"
							style={{ strokeDasharray: "433.540", strokeDashoffset: String(433.540 / totalTasks * (totalTasks - completedTasks)) }}
							cx="154"
							cy="154"
							r="69"
							fill="none"
							strokeWidth="16"
						>
						</circle>
					</svg>
				</span>
			</>
		)
	} else if (completedTasks === totalTasks) {
		progress = (
			<img
				className="checkIcon"
				src="/assets/images/check.svg"
				alt=""
			/>
		)
	}

	return (
		<span className={cn("progress", `progress_size_${size}`, "topicCard__progress")}>
			{progress}
		</span>
	)
}

export default CardProgress
