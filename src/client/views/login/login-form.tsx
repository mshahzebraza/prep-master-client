import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginFormDefaultValues, LoginFormValues, loginSchema } from 'src/client/views/login/login-form.model';

interface LoginFormProps {
    onSubmit: (data: LoginFormValues) => void;
}

const LoginForm = (props: LoginFormProps) => {

    const { onSubmit } = props;

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: loginFormDefaultValues
    });


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}

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
            <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                </label>
            </div>
            <Button type="submit" className="w-full">
                Log in
            </Button>
        </form>
    )
};

export default LoginForm;