import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "src/application/hooks/useAuth"
import { APP_URLS } from "src/routes/app-urls"
import useAuthStore from "src/shared/store/auth.store"

export const AdminLayout = () => {

    const {user} = useAuth()
    const isAuthenticated = !!user?.email
    const isAdmin = user?.roles.includes("admin")
    const navigate = useNavigate()

    const redirectToHome = () => navigate(APP_URLS.ROOT)


    useEffect(() => {
        if (!isAuthenticated) redirectToHome()
        if (!isAdmin) redirectToHome()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isAdmin])

    return <Outlet />
}