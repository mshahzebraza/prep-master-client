import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components/ui'
import { APP_URLS } from 'src/routes/app-urls'

type TestPreviewCardProps = {
    testId: number
}
const TestPreviewCard = (props: TestPreviewCardProps) => {
    const { testId } = props
    const navigate = useNavigate()

    const handleEditTest = () => {
        navigate(APP_URLS.APP.TEACHER.EDIT_TEST.replace(':testId', testId.toString()))
    }


    // title
    // no. of questions
    // category
    // difficulty
    // tags
    // created at
    // status


    return <div
        aria-label='test series card'
        className='flex flex-col gap-2 border-2 border-gray-300 p-4 rounded-md max-w-sm'
    >
        Test Series {testId}
        <Button
            aria-label='edit test series'
            variant='outline'
            onClick={handleEditTest}
        >
            Edit
        </Button>
    </div>
}



const TestPreviewList = () => {
    return <ul
        aria-label='test series list'
        className='flex flex-wrap gap-4'
    >
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((testSeries) => (
                <TestPreviewCard
                    key={testSeries}
                    testId={testSeries}
                />
            ))
        }
    </ul>
}



const TeacherDashboardView = () => {
    const navigate = useNavigate()
    // shows a list of all the test series created by the teacher
    // shows an add button to create a new test series
    const handleCreateTestSeries = () => {
        console.log('will redirect to add test series page')
        navigate(APP_URLS.APP.TEACHER.CREATE_TEST)
    }


    return (
        <div
            aria-label='view container'
            className='flex flex-col gap-4'
        >
            <div
                aria-label='action container'
            >
                <Button
                    aria-label='add test series'
                    variant='outline'
                    onClick={handleCreateTestSeries}
                >
                    Create Test
                </Button>
            </div>
            <TestPreviewList />
        </div>
    )
}

export default TeacherDashboardView