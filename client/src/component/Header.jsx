import { Button, Navbar, TextInput } from "flowbite-react"
import { Link, useLocation } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Header = () => {

  const location  = useLocation().pathname;

  return (
    <>
         <Navbar className="border-b-2">
            <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white">{`AMIN'S`}</span>
              BLOG
            </Link>
               <form action="">
                  <TextInput
                  type="text" placeholder="Search........" rightIcon={IoSearch} className="hidden lg:inline"/>
               </form>
               <Button className="w-12 h-12 lg:hidden" color="gray" >
                  <IoSearch/>
               </Button>
                 <div className="flex gap-2 md:order-2">
                  <Button className="w-12 h-12 hidden sm:inline" color="gray" pill>
                      <FaMoon/>
                  </Button>
                     <Link to="/sign-in">
                       <Button gradientDuoTone="purpleBlue">
                              Sign In
                       </Button>
                     </Link>
                    <Navbar.Toggle/>
                 </div>
                 <Navbar.Collapse>
                         <Navbar.Link active={location === "/"}>
                            <Link to="/">
                               Home
                            </Link>
                         </Navbar.Link>

                         <Navbar.Link active={location === "/about"}>
                            <Link to="/about">
                               ABOUT
                            </Link>
                         </Navbar.Link>
                         <Navbar.Link active={location === "/projects"}>
                            <Link to="/projects">
                               PROJECTS
                            </Link>
                         </Navbar.Link>
                     </Navbar.Collapse>
         </Navbar>
    </>       
  )
}

export default Header
