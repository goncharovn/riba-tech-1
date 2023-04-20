import cn from 'classnames'
import React, { FC } from 'react'
import './styles.scss'

interface ISectionProps {
	className?: string
	children: React.ReactNode
}

const Section: FC<ISectionProps> = ({
	className,
	children
}) => {
	return (
		<section className={
			cn(
				"section",
				{ [`${className}`]: className }
			)
		}>
			{children}
		</section>
	)
}

export default Section
