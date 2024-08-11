import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li
          className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]
        "
        >
          <a
            href="https://www.linkedin.com/in/gaurav-parasar"
            className="flex justify-between items-center w-full text-white "
            target="_blank"
            rel="noreferrer"
          >
            <>
              Linkedin <FaLinkedin size={30} />
            </>
          </a>
        </li>
        <li
          className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]
        "
        >
          <a
            href="https://github.com/INDIANgaurav"
            className="flex justify-between items-center w-full text-white "
            target="_blank"
            rel="noreferrer"
          >
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>
        <li
          className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]
        "
        >
          <a
            href="mailto:gasharma512@gmail.com"
            className="flex justify-between items-center w-full text-white "
            target="_blank"
            rel="noreferrer"
          >
            <>
              Email <HiOutlineMail size={30} />
            </>
          </a>
        </li>
        <li
          className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]
        "
        >
          <a
            href="/garuavparasarresume.pdf"
            className="flex justify-between items-center w-full text-white "
            download={true}
            target="_blank"
            rel="noreferrer"
          >
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
