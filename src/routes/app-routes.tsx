import { APP_URLS } from "@/routes/app-urls";
import { AuthRoutes } from "@/routes/auth-routes";
import { HomeRoutes } from "@/routes/home-routes";
import { PrivateRoutes } from "src/routes/private-routes";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={APP_URLS.FOLDER} element={<HomeRoutes />} />
      <Route path={APP_URLS.APP.FOLDER} element={<PrivateRoutes />} />
      <Route path={APP_URLS.AUTH.FOLDER} element={<AuthRoutes />} />
      {/* Catch all route for 404 */}
      <Route path="*" element={<div>404</div>} />
      {/* <Route path="/mcqs" element={<MultipleChoiceQuiz />} />
      <Route path="/testui" element={<TestsUI />} />
      <Route path="/signup" element={<SignupView />} />
      <Route path="/QuestionForm" element={<QuestionForm />} />
      <Route path="/discussion" element={<DiscussionFormView />} />
      <Route path="/" element={<FeedbackFormView />} /> */}
    </Routes>
  );
};

export default AppRoutes;
