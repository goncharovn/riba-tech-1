import "./styles.scss"
import cn from "classnames"

const ChoiceGroup = () => {
	return (
		<div className={cn("choiceGroup", "catalogSection__choiceGroup")}>
			<button className={cn("choiceGroup__item", "choiceGroup__item_active")}>Все</button>
			<button className={cn("choiceGroup__item")}>Рабочая среда</button>
			<button className={cn("choiceGroup__item")}>Библиотеки</button>
			<button className={cn("choiceGroup__item")}>Пройденные</button>
			<button className={cn("choiceGroup__item")}>Непройденные</button>
		</div>
	)
}

export default ChoiceGroup
