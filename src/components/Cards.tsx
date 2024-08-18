import { useState } from "react";

interface CardProps {
  images: string[];
  title: string;
  description: string;
  features: string[];
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
  features,
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
    <div className="flex justify-center">
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
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg max-w-4xl w-full h-full md:h-auto max-h-full overflow-hidden md:overflow-auto flex flex-col md:flex-row relative">
            {/* Left Side: Sliding Images */}
            <div className="relative w-full md:w-2/3 h-64 md:h-auto flex justify-center items-center overflow-hidden">
              <div
                className="relative w-full h-full"
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
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 transition-all duration-500 ease-in-out hover:-translate-x-1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 transition-all duration-500 ease-in-out hover:translate-x-1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className=""
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                </svg>
              </button>
            </div>

            {/* Right Side: Links and Text */}
            <div className="w-full md:w-1/3 md:pl-6 mt-4 md:mt-0 text-white overflow-auto md:overflow-hidden">
              <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {title}
                </h2>
                <h2 className="text-sm md:text-base font-normal text-gray-300 mt-2">
                  {description}
                </h2>
                <h3 className="text-xs md:text-sm font-semibold text-blue-400 mt-1">
                  {role}
                </h3>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Features
              </h2>
              <div className="text-gray-400 space-y-4">
                <ul className="list-disc list-inside">
                  {features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
