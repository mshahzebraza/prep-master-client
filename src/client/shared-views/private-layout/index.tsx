import { APP_URLS } from "@/routes/app-urls";
import useAuthStore from "@/shared/store/auth.store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "src/components/ui";

export const PrivateLayout = () => {

    const [auth] = useAuthStore()
    const isAuthenticated = auth.isAuth
    const navigate = useNavigate()

    const redirectToHome = () => navigate(APP_URLS.ROOT)
    const redirectToSignout = () => navigate(APP_URLS.APP.SIGNOUT)

    useEffect(() => {
        if (!isAuthenticated) redirectToHome()
    }, [isAuthenticated])

    return <div>
        <div className="bg-blue-500 text-white text-center p-2">
            <h1>Private Layout</h1>
        </div>
        <div className="flex items-center justify-between bg-slate-50 text-center p-2">
            <h2 className="">Your App</h2>
            <Button onClick={redirectToSignout}>Logout</Button>
        </div>
        <Outlet />
    </div>

}
