import myPic from "../assets/my-pic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      className="h-screen w-full bg-gradient-to-b from-black 
    via-black  to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Fullstack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am Gaurav Parasara full stack web developer with a passion for
            creating interactive and responsive web applications. I have done
            Mca from Jain University in 2024.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                Portfolio 
              <span className="group-hover:rotate-90 duration-300 ">
                {" "}
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={myPic}
            alt="my-profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
