import { CloudIcon } from "@heroicons/react/24/outline";
// import GitHub from "../../public/github.svg";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 mt-auto">
      <footer className="container">
        <div className=" flex flex-row justify-between py-3 text-sm">
          <div className="inline-flex items-center">
            <CloudIcon className="w-5 h-5 mr-1.5" />
            Powered by AI
          </div>
          <div className="inline-flex items-center hover:underline underline-offset-2">
            <a href="https://proptechintegrations.com">
              PropTech Integrations
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
