import { useState } from "react";

const tests = [
  {
    name: "Vocabulary",
    category: "ECAT",
    type: "Engineering",
    totalQuestions: 60,
  },
  { name: "Physics", category: "MDCAT", type: "Medical", totalQuestions: 100 },
  {
    name: "General Knowledge",
    category: "NTS",
    type: "General",
    totalQuestions: 80,
  },
  {
    name: "Mathematics",
    category: "SAT",
    type: "Standardized",
    totalQuestions: 120,
  },
];

export default function TestsUI() {
  const [search, setSearch] = useState("");

  const filteredTests = tests.filter((test) =>
    test.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Test Dashboard</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search tests..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTests.length > 0 ? (
          filteredTests.map((test, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{test.name}</h2>
              <p className="text-sm text-gray-600">Category: {test.category}</p>
              <p className="text-sm text-gray-600">Type: {test.type}</p>
              <p className="text-sm text-gray-600">
                Total Questions: {test.totalQuestions}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tests found
          </p>
        )}
      </div>
    </div>
  );
}
