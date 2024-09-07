import useAuthStore from "@/shared/store/auth.store";
import { Button } from "src/components/ui";

const LoginView = () => {

    const [_, setAuth] = useAuthStore()

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