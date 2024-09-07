import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupFormDefaultValues, SignupFormValues, signupSchema } from "src/client/views/signup/signup-form.model";
import { Button, Input, Label } from "src/components/ui";

interface SignupFormProps {
    onSubmit: (data: SignupFormValues) => void;
}

const SignupForm = (props: SignupFormProps) => {

    const { onSubmit } = props;

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: signupFormDefaultValues
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register('name')}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    {...register('password')}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                    id="confirmPassword"
                    type="password"
                    {...register('confirmPassword')}
                    required
                />
            </div>
            <Button type="submit" className="w-full">
                Sign up
            </Button>
        </form>
    )
}

export default SignupForm;