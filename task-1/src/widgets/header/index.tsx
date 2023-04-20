import "./styles.scss"
import cn from "classnames"
import { Link, NavLink } from "react-router-dom"

const setActive = (props: { isActive: boolean }) => (
	cn("header__navLink", { "header__navLink_active": props.isActive })
)

const Header = () => {
	return (
		<header className="header">
			<h1 className="page__heading">Портал Разработчика</h1>

			<nav className="header__nav">
				<ul className="header__navList">
					<li className="header__navItem">
						<NavLink className={setActive} to="/">Моё обучение</NavLink>
					</li>
					<li className="header__navItem">
						<NavLink className={setActive} to="/tasks">Задачи</NavLink>
					</li>
				</ul>
			</nav>

			<div className="header__actions">
				<button className="header__action">
					<img src="./assets/images/notification.svg" alt="" />
				</button>
				<button className="header__action">
					<img src="./assets/images/question.svg" alt="" />
				</button>
				<button className="header__action">
					<img src="./assets/images/sun.svg" alt="" />
				</button>
			</div>

			<Link className="header__user" to="/profile">
				<img className="header__avatar" src="./assets/images/avatar.png" alt="" />
				<span className="header__username">Михаил Романов</span>
			</Link>
		</header>
	)
}

export default Header
