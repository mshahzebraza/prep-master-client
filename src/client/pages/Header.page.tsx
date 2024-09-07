import React from "react";

const PageHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-600">PrepMaster</div>

        <a
          href="#signup"
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition"
        >
          Join Now
        </a>
      </div>
    </header>
  );
};

export default PageHeader;
