import { Route, Routes } from "react-router-dom";
import { SITE_MAP } from "../constants/site-map";
import DefaultLayout from "../layouts/default.layout";
import HomePage from "../pages/Home/HomePage";
function Router() {
  return (
    <Routes>
      <Route path={SITE_MAP.HOME.url} element={<DefaultLayout />}>
        <Route path={SITE_MAP.HOME.url} element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
