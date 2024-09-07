import DashboardPage from "@/client/pages/dashboard.page";
import SignoutPage from "@/client/pages/signout.page";
import { PrivateLayout } from "@/client/shared-views/private-layout";
import { APP_URLS as ALL_APP_URLS } from "@/routes/app-urls";
import { getLayoutRelativePath } from "@/shared/utils/string.utils";
import { Route, Routes } from "react-router-dom";

const APP_URLS = ALL_APP_URLS.APP
// removes the prefix aPP from the urls
const getAppRelativePath = (path: string) =>
    getLayoutRelativePath(path, APP_URLS.ROOT);


export const PrivateRoutes = () => {
    return <Routes>
        <Route element={<PrivateLayout />} >
            <Route path={getAppRelativePath(APP_URLS.ROOT)} element={<DashboardPage />} />
            <Route path={getAppRelativePath(APP_URLS.SIGNOUT)} element={<SignoutPage />} />
            {/* Catch all route for 404 */}
            <Route path="*" element={<div>404 private</div>} />
        </Route>
    </Routes>;
};
