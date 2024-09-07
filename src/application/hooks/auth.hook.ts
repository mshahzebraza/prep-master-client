import { useMutation } from "@tanstack/react-query"
import AuthApi from "src/api/auth/auth.api"
import { ILoginUserDto, ISignupUserDto } from "src/api/auth/auth.dto"
import { LoginFormValues } from "src/client/views/login/login-form.model"
import { SignupFormValues } from "src/client/views/signup/signup-form.model"
import { useToast } from "src/components/ui"

interface UseSignupHookProps {
    onSuccess?: (data: ISignupUserDto['response']) => void
}
const useSignupHook = ({ onSuccess: onSuccessCallback }: UseSignupHookProps) => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: async (data: SignupFormValues) => AuthApi.createUser(data),
        onSuccess: (data) => {
            onSuccessCallback?.(data)
            console.log(data)
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message
            })
            console.error(error)
        }

    })
    const { isPending, isSuccess, data, mutateAsync: signupUser } = mutation

    return {
        isPending,
        isSuccess,
        data,
        signupUser
    }
}


interface UseLoginHookProps {
    onSuccess?: (data: ILoginUserDto['response']) => void
}
const useLoginHook = ({ onSuccess: onSuccessCallback }: UseLoginHookProps) => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: async (data: LoginFormValues) => AuthApi.loginUser(data),
        onSuccess: (data) => {
            onSuccessCallback?.(data)
            console.log(data)
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message
            })
            console.error(error)
        }
    })
    const { isPending, isSuccess, data, mutateAsync: loginUser } = mutation

    return {
        isPending,
        isSuccess,
        data,
        loginUser
    }
}

const useLogoutHook = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: async () => AuthApi.logoutUser(),
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message
            })
            console.error(error)
        }
    })
    const { isPending, isSuccess, data, mutateAsync: logoutUser } = mutation

    return {
        isPending,
        isSuccess,
        data,
        logoutUser
    }
}

const AuthHooks = {
    useSignupHook,
    useLoginHook,
    useLogoutHook
}

export default AuthHooks