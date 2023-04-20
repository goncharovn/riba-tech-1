import { FC } from "react"
import cn from 'classnames'
import './styles.scss'

interface IHeadingProps {
	className?: string
	children: React.ReactNode
}

const Heading: FC<IHeadingProps> = ({
	className,
	children
}) => {
	return (
		<h3 className={
			cn(
				"section__heading",
				`${className}__heading`
			)
		}>
			{children}
		</h3>
	)
}

export default Heading
