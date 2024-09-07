import { useEffect } from "react";
import AuthHooks from "src/application/hooks/auth.hook";
import useAuthStore from "src/shared/store/auth.store";

const SignoutView = () => {

    const [_, setAuth] = useAuthStore()

    const { logoutUser } = AuthHooks.useLogoutHook()

    useEffect(() => {
        logoutUser()
    }, [])

    useEffect(() => {
        setAuth(prev => ({
            ...prev,
            isAuth: false
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return null
}

export default SignoutView