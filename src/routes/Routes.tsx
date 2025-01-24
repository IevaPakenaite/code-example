import { Route, Routes as RouterRoutes } from "react-router-dom";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { history } from "../helpers/history";
import PrivateRoute from "./PrivateRoute";
import PageLayout from "../components/PageLayout/PageLayout";
import Chat from "../containers/Chat/Chat";

function Routes(): JSX.Element {
  return (
    <Router history={history}>
      <RouterRoutes>
        <Route path="/" element={<PrivateRoute />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Chat />} />
            <Route path="/:chatId" element={<Chat />} />
          </Route>
        </Route>
      </RouterRoutes>
    </Router>
  );
}

export default Routes;
