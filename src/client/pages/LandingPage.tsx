import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-white">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-12 py-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Get Ready for Success
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl max-w-lg">
            Prepare for your entry test with our comprehensive materials, mock
            tests, and expert guidance.
          </p>
          <a
            href="/login"
            className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-md text-lg hover:bg-blue-700"
          >
            Join Us
          </a>
        </div>

        <div className="w-full lg:w-1/2 h-72 lg:h-full">
          <img
            src="https://res.cloudinary.com/dpil2pczb/image/upload/v1725700432/kelly-sikkema-YnRNdB-XTME-unsplash_v3spd6.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
