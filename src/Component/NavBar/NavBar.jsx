// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @ts-ignore
import img1 from "../../../public/image/Atmemly-Logo.svg";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuu = () => {
    setMenuOpen(!menuOpen); // تغيير حالة القائمة
  };
  

  
  return (
    // <nav className="p-4 border-b-2 md:p-5 2xl:p-1 xl:p-3 ">
    //   <div className="container mx-auto w-[85.4%]">
    //     <div className="md:flex md:justify-between md:items-center">
    //       <div>
    //         <img
    //           src={img1}
    //           alt="logo"
    //           width="120px"
    //           className="2xl:w-[100px] 2xl:my-3 xl:w-[95px] xl:my-1 lg:w-[80px] lg:my-0 md:w-[70px] cursor-pointer"
    //         />
    //       </div>
    //       <div id="menuu" className="flex 2xl:space-x-6 xl:space-x-5 lg:space-x-4 lg:text-sm lg:inline md:item-center">
    //         <Link
    //           to="/home"
    //           className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           to="/projects"
    //           className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
    //         >
    //           Projects
    //         </Link>
    //         <Link
    //           to="/services"
    //           className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
    //         >
    //           Services
    //         </Link>
    //         <Link
    //           to="/freelancers"
    //           className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
    //         >
    //           Freelancers
    //         </Link>
    //       </div>

    //       <div className="flex 2xl:space-x-6 xl:space-x-4 lg:space-x-3 lg:inline ">
    //         <Link
    //           to="/createa"
    //           className="text-white transition-all duration-300 ease-in-out border rounded-lg 2xl:bg-yellow-400 xl:bg-green-400 lg:bg-red-500 md:bg-blue-500 2xl:text-sm 2xl:px-8 2xl:py-4 xl:text-sm xl:px-8 xl:py-4 lg:text-xs lg:px-8 lg:py-3 bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300 hover:border-sky-300"
    //         >
    //           Create Account
    //         </Link>
    //         <Link
    //           to="/login"
    //           className="transition-all duration-300 ease-in-out border rounded-lg 2xl:text-sm 2xl:px-8 2xl:py-4 xl:text-sm xl:px-8 xl:py-4 lg:text-xs lg:px-8 lg:py-3 bg-cyan-50 hover:bg-white text-sky-300 hover:text-sky-400 border-sky-100 hover:border-slate-100"
    //         >
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  
      <nav className="p-5 bg-white border-b-2 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <span className="text-2xl cursor-pointer font-pops">
            <img
              src={img1}
              alt="logo"
              className=" lg:ml-28 2xl:w-[100px] 2xl:my-3 xl:w-[95px] xl:my-1 lg:w-[80px] lg:my-0 md:w-[70px] cursor-pointer"
            />
          </span>
          <span 
            onClick={menuu}
            className="block mx-2 text-3xl cursor-pointer md:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
        
        <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute
         bg-white w-[50%] h-[100%] left-0 top-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 
          ${menuOpen ?   'opacity-0 left-[-400px]':'opacity-100 left-[0px]'} 
          transition-all  ease-in duration-300 `}>
            <li className="mx-4 my-6 md:my-0">
            <span className="text-2xl cursor-pointer font-pops">
            <img
              src={img1}
              alt="logo"
              className="md:hidden w-[75px] 2xl:w-[100px] 2xl:my-3 xl:w-[95px] xl:my-1 lg:w-[80px] lg:my-0 md:w-[70px] cursor-pointer"
            />
            </span>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/home"
              className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/projects"
              className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
            >
              Projects
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/services"
              className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
            >
              Services
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/freelancers"
              className="transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
            >
              Freelancers
            </Link>
          </li>
          
            <li className="mx-3 my-11 md:my-9 lg:ml-96">
              <Link
                to="/createa"
                className="px-6 py-4 text-white transition-all duration-300 ease-in-out border rounded-lg md:text-sm bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300"
                // className="px-6 py-4 text-sm transition-all duration-300 ease-in-out lg:text-white lg:border lg:rounded-lg lg:bg-sky-300 lg:hover:bg-white lg:hover:text-sky-300 lg:border-sky-300 "

              >
                Create Account
              </Link>
            </li>
            <li className="my-9 md:my-9 lg:ml-0">
              <Link
                to="/login"
                className="px-6 py-4 mx-3 text-sm duration-500 border rounded-lg bg-cyan-50 hover:bg-white text-sky-300 hover:text-sky-400 border-sky-100 hover:border-slate-100"
                
// className="px-6 py-4 mx-3 text-sm duration-500 lg:border lg:rounded-lg lg:bg-cyan-50 lg:hover:bg-white lg:text-sky-300 lg:hover:text-sky-400 lg:border-sky-100 lg:hover:border-slate-100 md:text-neutral-500 md:hover:text-sky-300"

              >
                Login
              </Link>
            </li>
          
        </ul>
      </nav>
    );
  };
  
  export default NavBar;

// @ts-ignore
// import img1 from "../../../public/image/Atmemly-Logo.svg";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false); // حالة لتتبع ما إذا كانت القائمة مفتوحة أم مغلقة

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // تغيير حالة القائمة
//   };

//   return (
//     <nav className="p-4 border-b-2 md:p-5">
//       <div className="container w-full mx-auto">
//         <div className="flex items-center justify-between">
//           <div>
//             <img
//               src={img1}
//               alt="logo"
//               className="w-[120px] 2xl:w-[100px] xl:w-[95px] lg:w-[80px] md:w-[70px]"
//             />
//           </div>

//           {/* زر قائمة الهامبرغر */}
//           <button
//             className="md:hidden text-neutral-500 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             {isOpen ? '✖️' : '☰'} {/* أيقونة الهامبرغر */}
//           </button>

//           {/* قائمة الروابط */}
//           <div className={`flex md:flex md:space-x-4 ${isOpen ? 'flex-col absolute bg-white w-full md:static md:flex-row md:bg-transparent' : 'hidden md:flex'}`}>
//             <Link
//               to="/home"
//               className="p-2 transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
//             >
//               Home
//             </Link>
//             <Link
//               to="/projects"
//               className="p-2 transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
//             >
//               Projects
//             </Link>
//             <Link
//               to="/services"
//               className="p-2 transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
//             >
//               Services
//             </Link>
//             <Link
//               to="/freelancers"
//               className="p-2 transition-all duration-300 ease-in-out text-neutral-500 hover:text-sky-300"
//             >
//               Freelancers
//             </Link>
//             <div className="flex mt-2 space-x-4 md:mt-0">
//               <Link
//                 to="/createa"
//                 className="px-4 py-2 text-white transition-all duration-300 ease-in-out border rounded-lg bg-sky-300 hover:bg-white hover:text-sky-300 border-sky-300"
//               >
//                 Create Account
//               </Link>
//               <Link
//                 to="/login"
//                 className="px-4 py-2 transition-all duration-300 ease-in-out border rounded-lg bg-cyan-50 text-sky-300 hover:bg-white hover:text-sky-400 border-sky-100"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
