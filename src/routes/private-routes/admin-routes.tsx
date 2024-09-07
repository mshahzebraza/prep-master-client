import { APP_URLS as ALL_APP_URLS } from "@/routes/app-urls";
import { getLayoutRelativePath } from "@/shared/utils/string.utils";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "src/client/shared-views/private-layout/admin-layout";

const ADMIN_URLS = ALL_APP_URLS.APP.ADMIN
// removes the prefix from the urls
const getAdminRelativePath = (path: string) =>
    getLayoutRelativePath(path, ADMIN_URLS.ROOT);


export const AdminRoutes = () => {
    return <Routes>
        <Route element={<AdminLayout />} >

            <Route path={getAdminRelativePath(ADMIN_URLS.ROOT)} element={<div> admin </div>} />
            <Route path={getAdminRelativePath(ADMIN_URLS.ADMIN_DASHBOARD)} element={<div> admin dashboard </div>} />

            {/* Catch all route for 404 */}
            <Route path="*" element={<div>404 admin</div>} />
        </Route>
    </Routes>;
};
