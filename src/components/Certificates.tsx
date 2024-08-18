import electiveCert from "../assets/certs/Elective -certificate.pdf";
import cyberOpsCert from "../assets/certs/Cybersecurity - -certificate.pdf";
import webdevCert from "../assets/certs/webdev.pdf";
const Certificates = () => {
  return (
    <>
      <div className="grid grid-cols-1 m-2 mb-10 -sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        <a href={webdevCert}>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-semibold">
            The Complete 2024 Web Development Bootcamp (Udemy)
          </p>
        </a>
        <a href="https://www.credly.com/earner/earned/badge/f6f4b33f-0cee-4fc9-ac85-99d2e66841fc">
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-semibold">
            JavaScript Essentials 1 (Cisco Networking Academy)
          </p>
        </a>

        <a href="https://www.credly.com/badges/648401bd-1a29-474f-b258-c3c956a6298b">
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-semibold">
            JavaScript Essentials 2 (Cisco Networking Academy)
          </p>
        </a>

        <a href="https://www.credly.com/earner/earned/badge/b3d21bc0-603f-42cc-8eb5-4739c857ef52">
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-semibold">
            CCNAv7: Enterprise Networking, Security, and Automation (Cisco
            Networking Academy)
          </p>
        </a>
        <a href="https://www.credly.com/earner/earned/badge/f4a09d81-c4b3-4e8a-b0b7-623618f8919a">
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-semibold">
            CyberOps Associate (Cisco Networking Academy)
          </p>
        </a>
        <a href={electiveCert}>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-semibold">
            IoT Fundamentals: IoT Security (Cisco Networking Academy)
          </p>
        </a>

        <a href={cyberOpsCert}>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-semibold">
            Cyber Security : CyberOps Associate (Cisco Networking Academy)
          </p>
        </a>
      </div>
    </>
  );
};

export default Certificates;
