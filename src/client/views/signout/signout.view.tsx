import { useEffect } from "react";
import AuthHooks from "src/application/hooks/auth.hook";
import { useAuth } from "src/application/hooks/useAuth";
import useAuthStore from "src/shared/store/auth.store";

const SignoutView = () => {
    const { logout } = useAuth();

    const [_, setAuth] = useAuthStore()

    useEffect(() => {
        logout()
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