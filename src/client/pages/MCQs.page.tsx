import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
    answer: "Harper Lee",
  },
];

export default function MultipleChoiceQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [skippedQuestions, setSkippedQuestions] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (
      selectedOptions[currentQuestionIndex] ||
      skippedQuestions[currentQuestionIndex]
    ) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handleSubmitTest = () => {
    setShowResult(true);
  };

  const handleSkipQuestion = () => {
    const newSkippedQuestions = [...skippedQuestions];
    newSkippedQuestions[currentQuestionIndex] = true;
    setSkippedQuestions(newSkippedQuestions);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const correctAnswer = (selected: string, answer: string) => {
    return selected === answer;
  };

  const getQuestionStatus = (index: number) => {
    if (skippedQuestions[index]) return "skipped";
    if (selectedOptions[index] !== undefined) return "attempted";
    return "unattempted";
  };

  return (
    <div className="min-h-screen flex bg-white text-black pt-8">
      <div className="w-1/3 bg-gray-200 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">Quiz: General Knowledge</h1>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p className="text-lg">Total Questions: {questions.length}</p>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {questions.map((_, index) => (
              <button
                key={index}
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-white ${
                  getQuestionStatus(index) === "attempted"
                    ? "bg-green-600"
                    : getQuestionStatus(index) === "skipped"
                    ? "bg-yellow-600"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/3 p-6 bg-gray-100 flex flex-col relative">
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={handleSubmitTest}
        >
          Submit Test
        </button>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {questions[currentQuestionIndex].question}
          </h2>
        </div>
        <div className="space-y-2 mb-6">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className={`w-full px-4 py-2 text-left rounded-lg ${
                selectedOptions[currentQuestionIndex] === option
                  ? correctAnswer(
                      option,
                      questions[currentQuestionIndex].answer
                    )
                  : "bg-gray-300"
              } hover:bg-gray-400`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 flex space-x-4">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
            onClick={handleSkipQuestion}
          >
            Skip
          </button>

          <button
            className={`px-4 py-2 rounded-lg ${
              selectedOptions[currentQuestionIndex] ||
              skippedQuestions[currentQuestionIndex]
                ? "bg-gray-600 hover:bg-gray-500"
                : "bg-gray-400 cursor-not-allowed"
            } text-white`}
            onClick={
              selectedOptions[currentQuestionIndex] ||
              skippedQuestions[currentQuestionIndex]
                ? currentQuestionIndex === questions.length - 1
                  ? handleSubmitTest
                  : handleNextQuestion
                : undefined
            }
          >
            {currentQuestionIndex === questions.length - 1
              ? "Submit Test"
              : "Next Question"}
          </button>
        </div>

        {showResult && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Results:</h2>
            <ul>
              {questions.map((question, index) => (
                <li
                  key={index}
                  className={`mt-2 ${
                    getQuestionStatus(index) === "attempted"
                      ? "text-green-600"
                      : getQuestionStatus(index) === "skipped"
                      ? "text-yellow-600"
                      : "text-gray-600"
                  }`}
                >
                  {question.question} -{" "}
                  {getQuestionStatus(index) === "attempted"
                    ? "Attempted"
                    : getQuestionStatus(index) === "skipped"
                    ? "Skipped"
                    : "Not Attempted"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
