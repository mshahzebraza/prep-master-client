import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 EntryTestPrep. All rights reserved.</p>
        <div className="mt-4">
          <a href="#!" className="mr-6 hover:underline">
            Terms of Service
          </a>
          <a href="#!" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
