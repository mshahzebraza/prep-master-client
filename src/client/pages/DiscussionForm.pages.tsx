import React, { useState } from "react";

interface Discussion {
  topic: string;
  message: string;
  resources?: string;
  images?: File[]; // Adding images to the Discussion type
}

interface DiscussionFormProps {
  onSubmit: (discussion: Discussion) => void;
}

const DiscussionForm: React.FC<DiscussionFormProps> = ({ onSubmit }) => {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [resources, setResources] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ topic, message, resources, images });
    setTopic("");
    setMessage("");
    setResources("");
    setImages([]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Discussion Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="topic"
            className="block text-sm font-medium text-gray-700"
          >
            Topic
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="resources"
            className="block text-sm font-medium text-gray-700"
          >
            Resources (Optional)
          </label>
          <textarea
            id="resources"
            value={resources}
            onChange={(e) => setResources(e.target.value)}
            rows={2}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Images (Optional)
          </label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DiscussionForm;
