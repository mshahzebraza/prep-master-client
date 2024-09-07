import { Route, Routes } from "react-router-dom"
import { StudentLayout } from "src/client/shared-views/private-layout/student-layout"
import { getLayoutRelativePath } from "src/shared/utils";
import { APP_URLS } from "src/routes/app-urls";

const STUDENT_URLS = APP_URLS.APP.STUDENT
// removes the prefix from the urls
const getStudentRelativePath = (path: string) =>
    getLayoutRelativePath(path, STUDENT_URLS.ROOT);



export const StudentRoutes = () => {
    return <Routes>
        <Route element={<StudentLayout />} >
            <Route path={getStudentRelativePath(STUDENT_URLS.ROOT)} element={<div> student </div>} />
            <Route path={getStudentRelativePath(STUDENT_URLS.STUDENT_DASHBOARD)} element={<div> student dashboard </div>} />
            {/* Catch all route for 404 */}
            <Route path="*" element={<div>404 student</div>} />
        </Route>
    </Routes>
}