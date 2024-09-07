import { APP_URLS } from "@/routes/app-urls";
import { useNavigate } from "react-router-dom";
import AuthHooks from "src/application/hooks/auth.hook";
import GoogleLoginController from "src/client/views/login/google-login-controller";
import LoginCard from "src/client/views/login/login-card";
import LoginForm from 'src/client/views/login/login-form';
import { LoginFormValues } from 'src/client/views/login/login-form.model';
// import useAuthStore from "src/shared/store/auth.store";
import { useAuth } from "src/application/hooks/useAuth";


const LoginView = () => {
  // const [_, setUser] = useAuthStore()

  // const { navigateToRedirectUrl } = useRedirectUrl(APP_URLS.APP.ROOT)
  // const { loginUser, isPending, isSuccess, data } = AuthHooks.useLoginHook({
  //   onSuccess: (data) => {
  //     // set the auth state
  //     console.log("User logged in:", data)
  //     setUser(prev => ({
  //       ...prev,
  //       isAuth: true,
  //       user: data
  //     }))

  //   }
  // })

  const { user, loginWithEmailPassword, loginWithPopup } = useAuth()

  console.log(user)
  const navigate = useNavigate()
  const redirectToForgetPassword = () => navigate(APP_URLS.AUTH.FORGET_PASSWORD)
  const redirectToCreateAccount = () => navigate(APP_URLS.AUTH.SIGNUP)

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // await loginUser(data)

      console.log(import.meta.env.SERVERURL);
      await loginWithEmailPassword(data.email, data.password)


    } catch (error) {
      console.error(error)
    }
  };

  return (
    <section
      aria-label="Login View"
      className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center p-4">
      <LoginCard
        forgotPassword={redirectToForgetPassword}
        createAccount={redirectToCreateAccount}
      >
        <LoginForm
          onSubmit={onSubmit}
        />
        <GoogleLoginController />
      </LoginCard>
    </section>
  );
}

export default LoginView;
