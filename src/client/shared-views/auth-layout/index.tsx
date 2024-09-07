import { APP_URLS } from "@/routes/app-urls";
import authAtom from "@/shared/store/auth.store";
import { useAtom } from "jotai";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayout = () => {

    const [auth] = useAtom(authAtom)
    const isAuthenticated = auth.isAuth
    const navigate = useNavigate()

    const redirectToHome = () => navigate(APP_URLS.ROOT)
    if (isAuthenticated) redirectToHome()

    return <div>
        <div className="bg-slate-900 text-white text-center p-2">
            <h1>Auth Layout</h1>
        </div>
        <Outlet />
    </div>

}
