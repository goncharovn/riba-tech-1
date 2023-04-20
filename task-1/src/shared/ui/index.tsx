import { Outlet } from "react-router"
import Header from "widgets/header"

const Layout = () => {
	return (
		<>
			<Header />

			<main className="main">
				<Outlet />
			</main>
		</>
	)
}

export default Layout
