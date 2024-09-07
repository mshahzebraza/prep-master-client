import { Button } from "@/components/ui/button";
import authAtom from "@/shared/store/auth.store";
import { useAtom } from "jotai";

const LoginView = () => {

    const [_, setAuth] = useAtom(authAtom)

    const loginHandler = () => setAuth(prev => ({
        ...prev,
        isAuth: true
    }))

    return (
        <div>
            <h1>Login Screen</h1>

            <Button onClick={loginHandler}>
                Login
            </Button>
        </div>
    )
}

export default LoginView