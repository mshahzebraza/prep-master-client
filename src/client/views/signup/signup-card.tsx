import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';
import { Button } from 'src/components/ui';


interface SignupCardProps {
    children: React.ReactNode
    redirectToLogin: () => void
}

const SignupCard = ({ children, redirectToLogin }: SignupCardProps) => {


    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <div className="flex items-center justify-center mb-4">
                    {/* <ShoppingBag className="h-12 w-12 text-pink-500" /> */}
                </div>
                <CardTitle className="text-2xl font-bold text-center">Signup</CardTitle>
                <CardDescription className="text-center">
                    Enter your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                {children}
            </CardContent>
            <CardFooter className="flex  justify-between">
                <Button variant="ghost" size="sm" onClick={redirectToLogin}>
                    Login
                </Button>
            </CardFooter>
        </Card>
    )
}

export default SignupCard;