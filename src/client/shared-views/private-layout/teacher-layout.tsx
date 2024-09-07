import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { APP_URLS } from "src/routes/app-urls"
import useAuthStore from "src/shared/store/auth.store"



export const TeacherLayout = () => {

    const [auth] = useAuthStore()
    const isAuthenticated = auth.isAuth
    const isTeacher = auth.user?.roles.includes("teacher")
    const navigate = useNavigate()

    const redirectToHome = () => navigate(APP_URLS.ROOT)

    useEffect(() => {
        console.log("isAuthenticated", isAuthenticated)
        console.log("isTeacher", isTeacher)
        if (!isAuthenticated) redirectToHome()
        if (!isTeacher) redirectToHome()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isTeacher])

    return <>
        <div className="flex flex-col py-4 px-6">
            <h1 className="text-2xl font-bold" >Teacher Dashboard</h1>
            <div>
                <h2 className="text-lg " >Welcome to the teacher dashboard</h2>
            </div>
        </div>
        <Outlet />
    </>

}