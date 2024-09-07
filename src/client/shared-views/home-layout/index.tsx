import authAtom from "@/shared/store/auth.store";
import { cn } from "@/shared/utils";
import { useAtom } from "jotai";
import { Outlet } from "react-router-dom";

interface IAuthStatusBar {
    isAuth: boolean;
}
const AuthStatusBar = (props: IAuthStatusBar) => {
    const { isAuth } = props

    const authStatusText = isAuth ? "authenticated" : "unauthenticated"

    return <div className={cn(
        "bg-green-500 text-center text-white",
        isAuth ? "bg-green-500" : "bg-red-500"
    )}>
        You are {authStatusText}
    </div>

}


export const HomeLayout = () => {

    const [auth] = useAtom(authAtom)
    const isAuthenticated = auth.isAuth

    return <div>
        <AuthStatusBar isAuth={isAuthenticated} />
        <Outlet />
    </div>

}
