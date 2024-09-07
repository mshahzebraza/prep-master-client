import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { APP_URLS } from "src/routes/app-urls"
import useAuthStore from "src/shared/store/auth.store"

export const StudentLayout = () => {

    const [auth] = useAuthStore()
    const isAuthenticated = auth.isAuth
    const isStudent = auth.user?.roles.includes("student")
    const navigate = useNavigate()

    const redirectToHome = () => navigate(APP_URLS.ROOT)

    useEffect(() => {
        console.log("isAuthenticated", isAuthenticated)
        console.log("isStudent", isStudent)
        if (!isAuthenticated) redirectToHome()
        if (!isStudent) redirectToHome()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isStudent])

    return <Outlet />
}