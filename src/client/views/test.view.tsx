import React from 'react'
import { useParams } from 'react-router-dom';
import QuestionForm from 'src/client/pages/CreateQuestions.page';
type Category = "ecat" | "mdcat" | "nts" | "sat";

const mockDefaultValues = {
    testName: 'Test 1',
    category: 'ecat' as Category,
    totalQuestions: 10,
    questions: [
        {
            id: '1',
            text: 'Question 1',
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
            correctOptionIndex: 0,
        }
    ]
}


const generateDefaultValuesForTest = (testId: string) => {
    return {
        testName: `Test ${testId}`,
        category: 'ecat' as Category,
        totalQuestions: 10,
        questions: [
            {
                id: '1',
                text: 'Question 1',
                options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                correctOptionIndex: 0,
            }
        ]
    }
}



const TestView = () => {

    // check if is on the edit page
    const { testId } = useParams();

    const isEditPage = !!testId;

    return (
        <div>{
            isEditPage
                ? <QuestionForm defaultValues={
                    generateDefaultValuesForTest(testId)
                } />
                : <QuestionForm />
        }</div>
    )
}

export default TestView