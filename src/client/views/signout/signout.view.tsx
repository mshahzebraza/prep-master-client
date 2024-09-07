import authAtom from "@/shared/store/auth.store";
import { useAtom } from "jotai";
import { useEffect } from "react"

const SignoutView = () => {

    const [_, setAuth] = useAtom(authAtom)


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