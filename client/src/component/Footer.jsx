import {Footer} from "flowbite-react"
import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, } from "react-icons/fa";
const FooterCom = () => {
  return (
    <>
       <Footer className="border border-t-8 border-teal-8">
         <div className="w-full max-w-7xl mx-auto">
           <div className="grid w-full justify-between sm:flex md:grid-cols-1">
             <div className="mt-5">
               <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white">{`AMIN'S`}</span>
                 BLOG
               </Link>
             </div>
              <div className="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title="ABOUT"/>
                <Footer.LinkGroup col>

                  <Footer.Link href="https://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">
                    100 JS Projects
                  </Footer.Link>

                  <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                    {`Amin'S Blog`}
                  </Footer.Link>

                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title="FOLLOW US"/>
                <Footer.LinkGroup col>

                  <Footer.Link href="https://www.github.com/programmeramin" target="_blank" rel="noopener noreferrer">
                    Github
                  </Footer.Link>

                  <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                   Discord
                  </Footer.Link>

                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title="LEGAL"/>
                <Footer.LinkGroup col>

                  <Footer.Link href="https://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </Footer.Link>

                  <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                    Terms &amp; Conditions
                  </Footer.Link>

                </Footer.LinkGroup>
                </div>
              </div>
           </div>

             <Footer.Divider/>
             <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" by="amin's blog " year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                 <Footer.Icon href="#" icon={FaFacebook}/>
                 <Footer.Icon href="#" icon={FaInstagram}/>
                 <Footer.Icon href="#" icon={FaTwitter}/>
                 <Footer.Icon href="https://github.com/programmeramin" icon={FaGithub}/>
              </div>
             </div>

             

         </div>
       </Footer>
    </>
  )
}

export default FooterCom
     