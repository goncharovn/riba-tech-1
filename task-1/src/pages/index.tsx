import { Routes, Route } from "react-router-dom"
import Layout from "shared/ui"
import MyTrainingPage from "pages/my-training"
import TasksPage from "pages/tasks"
import ProfilePage from "pages/profile"

const Routing = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MyTrainingPage />} />
					<Route path="tasks" element={<TasksPage />} />
					<Route path="profile" element={<ProfilePage />} />
				</Route>
			</Routes>
		</>
	)
}

export default Routing
