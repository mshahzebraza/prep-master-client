import { APP_URLS } from "@/routes/app-urls";
import { AuthRoutes } from "@/routes/auth-routes";
import { HomeRoutes } from "@/routes/home-routes";
import { PrivateRoutes } from "@/routes/private-routes";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={APP_URLS.FOLDER} element={<HomeRoutes />} />
            <Route path={APP_URLS.APP.FOLDER} element={<PrivateRoutes />} />
            <Route path={APP_URLS.AUTH.FOLDER} element={<AuthRoutes />} />
        </Routes>
    )
}

export default AppRoutes