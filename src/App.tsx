import Icons from "./components/Icons";
import Certificates from "./components/Certificates";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

import communisync1 from "../src/assets/communisync/communisync1.jpg";
import communisync2 from "../src/assets/communisync/communisync2.png";
import communisync3 from "../src/assets/communisync/communisync3.png";
import communisync4 from "../src/assets/communisync/communisync4.png";

import drinksaoh1 from "../src/assets/drinksaoh/drinksaoh1.jpg";
import drinksaoh2 from "../src/assets/drinksaoh/drinksaoh2.png";
import drinksaoh3 from "../src/assets/drinksaoh/drinksaoh3.jpg";
import drinksaoh4 from "../src/assets/drinksaoh/drinksaoh4.png";

import pancoffeeko1 from "../src/assets/pancoffeeko/pancoffeeko1.png";
import pancoffeeko2 from "../src/assets/pancoffeeko/pancoffeeko2.png";
import pancoffeeko3 from "../src/assets/pancoffeeko/pancoffeeko3.png";
import pancoffeeko4 from "../src/assets/pancoffeeko/pancoffeeko4.png";

import meimoreis1 from "../src/assets/meimoreis/MeiMoreIs1.png";
import meimoreis2 from "../src/assets/meimoreis/MeiMoreIs2.png";
import meimoreis3 from "../src/assets/meimoreis/MeiMoreIs3.png";

import Card from "./components/Cards";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      <section
        id="home"
        className="pt-16 max-w-7xl h-screen mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center fade-in-up"
      >
        {/* Left side: Name and Title */}
        <Home />
      </section>

      <section
        id="about"
        className="max-w-7xl min-h-screen mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 className="fade-in-up text-4xl mt-10 font-bold mb-4 flex justify-center">
          Skills and Certificates
        </h2>
        <Certificates />
        <Icons />
      </section>

      <section
        id="projects"
        className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:pt-48 sm:px-6 lg:px-8"
      >
        <h2 className="fade-in-up text-3xl sm:text-4xl mt-20 sm:mt-32 font-bold mb-6 sm:mb-8 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            images={[communisync1, communisync2, communisync3, communisync4]}
            title="CommuniSync"
            description="A Subdivision Management System"
            githubLink="https://github.com/m-montefalcon/CommuniSync"
            liveDemoLink=""
            stackDescription="Laravel | Blades | Flutter |  MariaDB | Firebase"
            role="Project Head | Mobile Developer | Full Stack Developer"
          />
          <Card
            images={[pancoffeeko1, pancoffeeko4, pancoffeeko3, pancoffeeko2]}
            title="PanCoffeeKo"
            description="Inventory Mangement and POS System for Coffees"
            githubLink="https://github.com/m-montefalcon/PanCoffeeKo-Frontend"
            liveDemoLink="https://your-live-demo-link-3.com"
            stackDescription="React | Typescript | Tailwind | DaisyUI | Laravel | MySQL"
            role="Full Stack Developer"
          />
          <Card
            images={[drinksaoh1, drinksaoh4, drinksaoh2, drinksaoh3]}
            title="DrinkSaOh"
            description="Inventory Management System for snacks and beverages"
            githubLink="https://github.com/m-montefalcon/DrinkSaOh"
            liveDemoLink=""
            role="Project Head | Mobile Developer | Full Stack Developer"
            stackDescription="Laravel | Blades | Flutter | MariaDB | Firebase"
          />

          <Card
            images={[meimoreis2, meimoreis1, meimoreis3]}
            title="MeiMoreIS"
            description="A simple social media application"
            githubLink="https://github.com/m-montefalcon/meimoreis_backend"
            liveDemoLink=""
            stackDescription="React | Bootstrap | NodeJS | Express | PostgreSQL"
            role="Full Stack Developer"
          />
        </div>
      </section>

      <section
        id="contact"
        className="max-w-7xl mx-auto mt-20 px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2 className="flex justify-center text-3xl font-bold mb-4 mt-10">
          Reach me at the following{" "}
        </h2>
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            &copy; Meinardz C. Montefalcon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
