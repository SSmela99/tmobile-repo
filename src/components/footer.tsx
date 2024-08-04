import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-950 py-6 border-t">
      <div className="max-w-wrapper mx-auto px-8">
        <div className="flex items-center justify-between">
          <p>Created by: Sebastian Smela</p>
          <Link
            href="https://www.linkedin.com/in/sebastian-smela-36a776201/"
            target="_blank"
          >
            <FaLinkedin size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
