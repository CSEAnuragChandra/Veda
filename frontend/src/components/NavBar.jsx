import { MdMenuBook } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { useState } from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-auto items-center bg-transparent flex p-8 justify-between">
      <div>
        <h1 className="text-5xl font-semibold">वेदम्</h1>
      </div>
      <div className="flex w-1/2 justify-end gap-10 items-center">
        <div className="w-full max-w-md relative">
          <input
            type="text"
            placeholder="किताबें"
            className="w-full bg-[#d6ccc2] h-10 px-4 pr-12 rounded-full border shadow-lg"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-label="Search"
            onClick={() => {
              /* Add your search function here */
            }}
          >
            <MdMenuBook size={24} className="text-gray-700" />
          </button>
        </div>
        <a href="#" className="h-10 w-10 border rounded-full p-2 shadow-lg bg-[#d6ccc2] hover:bg-[#fff] transition-all duration-250 flex items-center justify-center">
          <FaCartPlus size={24} className="text-gray-700"/>
        </a>
        <Login/>
      </div>
    </nav>
  );
};

const Login = () => {
  const [login , setLogin] = useState(true);

  if(!login){
    return(
      <a href="#" className="text-xl font-semibold  rounded-full px-8 py-2 border shadow-md bg-[#d6ccc2] hover:bg-[#fff] transition-all duration-250">Login</a>
    );
  }
  else{
    return(
      <a href = '#' className="h-10 w-10 rounded-[50%] bg-[#d6ccc2] hover:bg-[#fff] border shadow-md transition-all duration-300 flex justify-center items-center"><CiUser className="h-7 w-7 pb-1"/></a>
    )
  }
}
export default NavBar;