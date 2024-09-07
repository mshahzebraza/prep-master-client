import { APP_URLS } from "@/routes/app-urls";
import useAuthStore from "@/shared/store/auth.store";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/ui";


interface IHomeAction {
    isAuth: boolean;
}
const HomeAction = (props: IHomeAction) => {
    const { isAuth } = props;
    const navigate = useNavigate()

    const redirectToApp = () => navigate(APP_URLS.APP.ROOT)
    const redirectToLogin = () => navigate(APP_URLS.AUTH.LOGIN)

    const actionHandler = isAuth ? redirectToApp : redirectToLogin;
    const actionText = isAuth ? "Go to App" : "Go to Login" // Go to App 


    return <Button className="w-min" onClick={actionHandler}>
        {actionText}
    </Button>
}

const HomePage = () => {

    const [auth] = useAuthStore()
    const isAuthenticated = auth.isAuth

    return (

        <div className="flex flex-col  gap-2 p-2 h-screen bg-slate-200">
            <h1 className="text-xl">Home Screen</h1>
            <HomeAction
                isAuth={isAuthenticated}
            />

        </div>
    )
}

export default HomePage