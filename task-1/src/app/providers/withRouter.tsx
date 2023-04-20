import { HashRouter } from "react-router-dom"

const withRouter = (component: () => React.ReactNode) => () => (
	<HashRouter>
		{component()}
	</HashRouter>
)

export default withRouter
