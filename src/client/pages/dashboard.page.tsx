import { Link } from "react-router-dom"
import { APP_URLS } from "src/routes/app-urls"

const DashboardPage = () => {
    return <div className="flex flex-col gap-2">
        <Link
            className="text-blue-500"
            to={APP_URLS.APP.ADMIN.ROOT}>Admin</Link>

        <Link
            className="text-blue-500"
            to={APP_URLS.APP.ADMIN.ROOT}>Admin Dashboard</Link>
        <Link
            className="text-blue-500"
            to={APP_URLS.APP.TEACHER.ROOT}>Teacher Dashboard</Link>
        <Link
            className="text-blue-500"
            to={APP_URLS.APP.STUDENT.STUDENT_DASHBOARD}>Student Dashboard</Link>
        <h1 className="text-xl flex flex-col gap-2">
            Dashboard Page
        </h1>
    </div>
}

export default DashboardPage