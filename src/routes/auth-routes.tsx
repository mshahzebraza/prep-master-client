import LoginPage from "@/client/pages/login.page";
import SignupPage from "@/client/pages/signup.page";
import { AuthLayout } from "@/client/shared-views/auth-layout";
import { APP_URLS } from "@/routes/app-urls";
import { getLayoutRelativePath } from "@/shared/utils/string.utils";
import { Routes, Route } from "react-router-dom";


const AUTH_URLS = APP_URLS.AUTH
// removes the prefix auth from the urls
const getAuthRelativePath = (path: string) =>
    getLayoutRelativePath(path, AUTH_URLS.ROOT);


export const AuthRoutes = () => {
    return <Routes>
        <Route element={<AuthLayout />}>
            <Route path={getAuthRelativePath(AUTH_URLS.LOGIN)} element={<LoginPage />} />
            <Route path={getAuthRelativePath(AUTH_URLS.SIGNUP)} element={<SignupPage />} />
        </Route>
    </Routes>;
};
