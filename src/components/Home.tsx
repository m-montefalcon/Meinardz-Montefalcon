import cv from "../assets/Curriculum Vitae, Meinardz C. Montefalcon.pdf";
import picture from "../assets/picture.png";
const Home = () => {
  return (
    <>
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:ml-16 fade-in-up">
        <h1 className="text-6xl font-extrabold text-white mb-2 mt-10">
          Meinardz Montefalcon
        </h1>
        <p className="text-xl text-gray-400">A Software Web Developer</p>
        <a
          href="https://www.linkedin.com/in/meinardzmontefalcon"
          className="my-2 mr-1 flex items-center border-gray-700 text-gray-700 bg-transparent rounded px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors fade-in-up"
          style={{ display: "inline-flex" }}
        >
          <span className="flex items-center space-x-2">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              className="text-gray-700"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
            </svg>
            <span>LinkedIn</span>
          </span>
        </a>

        <a
          href="https://github.com/m-montefalcon"
          className="my-2 mr-1 flex items-center border-gray-700 text-gray-700 bg-transparent rounded px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors fade-in-up"
          style={{ display: "inline-flex" }}
        >
          <span className="flex items-center space-x-2">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
            <span>Github</span>
          </span>
        </a>

        <a
          href="https://www.facebook.com/meinardz.montefalcon"
          className="my-2 mr-1 flex items-center border-gray-700 text-gray-700 bg-transparent rounded px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors fade-in-up"
          style={{ display: "inline-flex" }}
        >
          <span className="flex items-center space-x-2">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
            </svg>
            <span>Facebook</span>
          </span>
        </a>
        <br />
        <a
          href={cv}
          className="my-2 mr-1 flex items-center border-gray-700 text-gray-700 bg-transparent rounded px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors fade-in-up"
          style={{ display: "inline-flex" }}
        >
          <span className="flex items-center space-x-2">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M280 240a8 8 0 01-8-8V48h-57.25a65.42 65.42 0 00-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0040-40V80h-32v152a7.75 7.75 0 01-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40 29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144H48v82.13c0 51.51 33.19 89.63 80 93.53V468a12 12 0 0012 12h312a12 12 0 0012-12V240z" />
              <path d="M308 208h146.31a2 2 0 001.42-3.41L307.41 56.27a2 2 0 00-3.41 1.42V204a4 4 0 004 4z" />
            </svg>
            <span>Curriculum vitae</span>
          </span>
        </a>
        <a
          href="mailto:meinardz2001@gmail.com"
          className="my-2 mr-1 flex items-center border-gray-700 text-gray-700 bg-transparent rounded px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors fade-in-up"
          style={{ display: "inline-flex" }}
        >
          <span className="flex items-center space-x-2">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
            </svg>
            <span>Email</span>
          </span>
        </a>
      </div>
      {/* Right side: Image with curved rectangle design and glowing shadow */}
      <div className="md:w-1/2 flex justify-center md:justify-start items-end">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="relative rounded overflow-hidden shadow-lg w-full h-full flex items-center justify-center">
            <img
              src={picture}
              alt="Meinardz Montefalcon"
              className="w-full h-full object-cover"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-black opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
