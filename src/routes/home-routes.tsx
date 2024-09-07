import HomePage from "@/client/pages/home.page";
import { HomeLayout } from "@/client/shared-views/home-layout";
import { APP_URLS } from "@/routes/app-urls";
import { Route, Routes } from "react-router-dom";

export const HomeRoutes = () => {
    return <Routes>
        <Route element={<HomeLayout />}>
            <Route path={APP_URLS.HOME.ROOT} element={<HomePage />} />
            {/* Catch all route for 404 */}
            <Route path="*" element={<div>404 home</div>} />
        </Route>
    </Routes>;
};
