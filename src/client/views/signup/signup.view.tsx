import SignupForm from '@/client/views/signup/signup-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'src/application/hooks/useAuth'
import SignupCard from 'src/client/views/signup/signup-card'
import { SignupFormValues } from 'src/client/views/signup/signup-form.model'
import { APP_URLS } from 'src/routes/app-urls'



const SignupView = () => {

    const navigate = useNavigate()
    // const [_, setUser] = useAuthStore()
    const { user, createAccount } = useAuth();

    // TODO: Combine it with App Signup to create a single hook
    // const { signupUser, isPending, isSuccess, data } = AuthHooks.useSignupHook({
    //     onSuccess: (user) => {
    //         // change the state of the user
    //         console.log("User created:", user)
    //         setUser(prev => ({
    //             ...prev,
    //             isAuth: true,
    //             user
    //         }))
    //     }
    // })


    const redirectToLogin = () => {
        navigate(APP_URLS.AUTH.LOGIN)
    }

    const onSubmit = async (data: SignupFormValues) => {
        try {

            await createAccount(data.name, data.email, data.password, data.role)
            alert("Account created successfully")

            // if(response.status === 1){
            //     alert(response.message)
            // }else{
            //     alert(`Create Account Failed`)
            // }
            // const signinUser = await signupUser({ email: data.email, password: data.password, name: data.name })

        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    return (
        <section
            aria-label="Login View"
            className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center p-4"
        >
            <SignupCard redirectToLogin={redirectToLogin}>
                <SignupForm onSubmit={onSubmit} />
            </SignupCard>
        </section>
    )
}

export default SignupView