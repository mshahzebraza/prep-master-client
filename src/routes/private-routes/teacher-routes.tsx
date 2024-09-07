import { Route, Routes } from "react-router-dom";
import TeacherDashboardPage from "src/client/pages/teacher-dashboard";
import { TeacherLayout } from "src/client/shared-views/private-layout/teacher-layout";
import TestView from "src/client/views/test.view";
import { APP_URLS } from "src/routes/app-urls";
import { getLayoutRelativePath } from "src/shared/utils";

const TEACHER_URLS = APP_URLS.APP.TEACHER
// removes the prefix from the urls
const getTeacherRelativePath = (path: string) =>
    getLayoutRelativePath(path, TEACHER_URLS.ROOT);


export const TeacherRoutes = () => {
    return <Routes>
        <Route element={<TeacherLayout />} >
            <Route path={getTeacherRelativePath(TEACHER_URLS.ROOT)} element={<TeacherDashboardPage />} />
            <Route path={getTeacherRelativePath(TEACHER_URLS.CREATE_TEST)} element={<TestView />} />
            <Route path={getTeacherRelativePath(TEACHER_URLS.EDIT_TEST)} element={<TestView />} />
            {/* Catch all route for 404 */}
            <Route path="*" element={<div>404 teacher</div>} />
        </Route>
    </Routes>
}