import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';


interface LoginCardProps {
    children: React.ReactNode
    forgotPassword: () => void
    createAccount: () => void
}
const LoginCard = ({ children, forgotPassword, createAccount }: LoginCardProps) => {
    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                <CardDescription className="text-center">
                    Enter your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                {children}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" onClick={forgotPassword}>
                    Forgot password?
                </Button>
                <Button variant="ghost" size="sm" onClick={createAccount}>
                    Create account
                </Button>
            </CardFooter>
        </Card>)
}

export default LoginCard;