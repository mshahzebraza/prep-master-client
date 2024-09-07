import React, { useState } from "react";
import "tailwindcss/tailwind.css";

interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

type Category = "ecat" | "mdcat" | "nts" | "sat";

const QuestionForm = () => {
  const [testName, setTestName] = useState<string>("");
  const [category, setCategory] = useState<Category>("ecat");
  const [totalQuestions, setTotalQuestions] = useState<number>(1);
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: Date.now().toString(),
      text: "",
      options: ["", "", "", ""],
      correctOptionIndex: 0,
    },
  ]);
  const [price, setPrice] = useState<number>(0); // New state for price

  const handleNumberOfQuestionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newNumQuestions = parseInt(e.target.value, 10);
    setTotalQuestions(newNumQuestions);

    const newQuestions = [...questions];
    while (newQuestions.length < newNumQuestions) {
      newQuestions.push({
        id: Date.now().toString(),
        text: "",
        options: ["", "", "", ""],
        correctOptionIndex: 0,
      });
    }
    while (newQuestions.length > newNumQuestions) {
      newQuestions.pop();
    }
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index: number, field: string, value: any) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [field]: value,
    };
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (
    questionIndex: number,
    optionIndex: number,
    value: string
  ) => {
    const updatedQuestions = [...questions];
    const updatedOptions = [...updatedQuestions[questionIndex].options];
    updatedOptions[optionIndex] = value;
    updatedQuestions[questionIndex].options = updatedOptions;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ testName, category, totalQuestions, questions, price });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Test Name:
            <input
              type="text"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              required
              className="ml-2 p-2 border border-gray-300 rounded-md w-full"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Type of Test:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              required
              className="ml-2 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="ecat">ECAT</option>
              <option value="mdcat">MDCAT</option>
              <option value="nts">NTS</option>
              <option value="sat">SAT</option>
            </select>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Total Number of Questions:
            <input
              type="number"
              value={totalQuestions}
              onChange={handleNumberOfQuestionsChange}
              min="1"
              required
              className="ml-2 p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Price (PKR):
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              min="0"
              required
              className="ml-2 p-2 border border-gray-300 rounded-md w-full"
            />
          </label>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {questions.map((question, qIndex) => (
            <div
              key={qIndex}
              className="p-4 mb-4 border rounded-lg shadow-md bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">
                Question {qIndex + 1}
              </h3>
              <div className="mb-4">
                <input
                  type="text"
                  value={question.text}
                  onChange={(e) =>
                    handleQuestionChange(qIndex, "text", e.target.value)
                  }
                  required
                  className="ml-2 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div className="flex flex-wrap">
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="w-1/2 p-2">
                    <label className="block mb-1">
                      Option {oIndex + 1}
                      <input
                        type="text"
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(qIndex, oIndex, e.target.value)
                        }
                        required
                        className="ml-2 p-2 border border-gray-300 rounded-md w-full"
                      />
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label className="block mb-2">
                  Correct Option Index:
                  <input
                    type="number"
                    value={question.correctOptionIndex}
                    onChange={(e) =>
                      handleQuestionChange(
                        qIndex,
                        "correctOptionIndex",
                        parseInt(e.target.value, 10)
                      )
                    }
                    min="0"
                    max={question.options.length - 1}
                    required
                    className="ml-2 p-2 border border-gray-300 rounded-md w-full"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add New Test
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
