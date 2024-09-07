import { useAtom } from "jotai";
import { useEffect } from "react"
import useAuthStore from "src/shared/store/auth.store";

const SignoutView = () => {

    const [_, setAuth] = useAuthStore()


    useEffect(() => {
        setAuth(prev => ({
            ...prev,
            isAuth: false
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            Signout
        </div>
    )
}

export default SignoutView