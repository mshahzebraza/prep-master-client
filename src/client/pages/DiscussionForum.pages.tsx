import React, { useState } from "react";
import DiscussionForm from "./DiscussionForm.pages";

interface Discussion {
  topic: string;
  message: string;
  resources?: string;
}

const DiscussionForum: React.FC = () => {
  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      topic: "Initial Discussion",
      message: "This is a sample message.",
      resources: "http://example.com",
    },
  ]);

  const handleAddDiscussion = (newDiscussion: Discussion) => {
    setDiscussions([...discussions, newDiscussion]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Discussion Forum</h1>

      <div className="space-y-4 mb-6">
        {discussions.map((discussion, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{discussion.topic}</h2>
            <p className="mt-2">{discussion.message}</p>
            {discussion.resources && (
              <div className="mt-2">
                <a
                  href={discussion.resources}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resources
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <DiscussionForm onSubmit={handleAddDiscussion} />
    </div>
  );
};

export default DiscussionForum;
