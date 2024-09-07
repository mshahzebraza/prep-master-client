import { APP_URLS } from "@/routes/app-urls";
import useAuthStore from "@/shared/store/auth.store";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/application/hooks/useAuth";
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

    // const [auth] = useAuthStore()
    const {user,logout} = useAuth()
    const isAuthenticated = !!user?.email

    return (

        <div className="flex flex-col  gap-2 p-2 h-screen bg-slate-200">
            <h1 className="text-xl">Home Screen</h1>
            <div><button onClick={logout} className="border-2 border-gray-100 p-2 rounded-lg bg-gray-400">Logout</button></div>
            <HomeAction
                isAuth={isAuthenticated}
            />

        </div>
    )
}

export default HomePage