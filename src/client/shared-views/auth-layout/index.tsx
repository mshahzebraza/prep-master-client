import { APP_URLS } from "@/routes/app-urls";
import useAuthStore from "@/shared/store/auth.store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayout = () => {

    const [auth] = useAuthStore()
    const isAuthenticated = auth.isAuth
    const navigate = useNavigate()

    const redirectToHome = () => navigate(APP_URLS.ROOT)

    useEffect(() => {
        if (isAuthenticated) redirectToHome()
    }, [isAuthenticated])

    return <div>
        <div className="bg-slate-900 text-white text-center p-2">
            <h1>Auth Layout</h1>
        </div>
        <Outlet />
    </div>

}
