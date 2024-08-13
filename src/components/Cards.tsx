import React, { useState } from "react";

interface CardProps {
  images: string[];
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  stackDescription: string;
  role: string;
}

const Card: React.FC<CardProps> = ({
  images,
  title,
  description,
  githubLink,
  liveDemoLink,
  stackDescription,
  role,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("opacity-100");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleImageChange = (newIndex: number) => {
    setTransitionClass("opacity-0");
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setTransitionClass("opacity-100");
    }, 300);
  };

  const previousImage = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    handleImageChange(newIndex);
  };

  const nextImage = () => {
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    handleImageChange(newIndex);
  };

  return (
    <div>
      {/* Project Card */}
      <div className="w-full sm:w-full lg:w-3/4 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img
          src={images[1]}
          alt="Project Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-3">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a className="relative flex items-center cursor-not-allowed group">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
                </svg>
                <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Coming Soon
                </span>
              </a>
            </div>
            <a
              onClick={toggleModal}
              className="text-sm text-blue-500 hover:underline cursor-pointer"
            >
              Read More
            </a>
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400 mt-2">{stackDescription}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row relative">
            {/* Left Side: Sliding Images */}
            <div className="md:w-2/3 w-full relative">
              <div
                className="relative w-full h-0"
                style={{ paddingBottom: "56.25%" }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Project Image"
                  className={`absolute top-0 left-0 w-full h-full object-contain rounded-lg transition-opacity duration-300 ${transitionClass}`}
                />
              </div>
              <button
                onClick={previousImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                ▶
              </button>
            </div>

            {/* Right Side: Links and Text */}
            <div className="md:w-1/3 w-full md:pl-6 mt-6 md:mt-0 text-white">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <h3 className="text-sm font-semibold text-blue-400 mt-1">
                  {role}
                </h3>
              </div>

              <div className="text-gray-400 space-y-4">
                <p>{description}</p>
                <p>{stackDescription}</p>
              </div>

              <div className="flex flex-col space-y-4 mb-4 mt-4">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:underline"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    className="mr-1"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
                <a
                  className="relative cursor-not-allowed group flex items-center"
                  aria-disabled="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="text-gray-500 mr-2"
                  >
                    <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
                    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
                  </svg>
                  Live Demo
                  <span className="absolute left-1/2 transform -translate-x-1/2 -top-6 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Coming Soon
                  </span>
                </a>
              </div>
              <button
                onClick={toggleModal}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
