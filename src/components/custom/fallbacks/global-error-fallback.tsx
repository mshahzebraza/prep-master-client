import { Button } from '@/components/ui/button'
import { FallbackProps } from 'react-error-boundary'

const GlobalErrorFallback = (props: FallbackProps) => {
    const { resetErrorBoundary, error } = props
    return (
        <div>
            <h1>ErrorBoundary</h1>
            <pre>{error.message}</pre>
            <Button onClick={resetErrorBoundary}>Try again</Button>
        </div>
    )
}

export default GlobalErrorFallback