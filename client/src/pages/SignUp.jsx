import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <>
   
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
           {/** left */}
           <div className="flex-1">
           <Link to="/" className=" text-sm sm:text-xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white">{`AMIN'S`}</span>
              BLOG
            </Link>
            <p className="text-2xl font-semibold mt-5">This is a demo project. You can sign up with your email and password or with Google </p>
           </div>

           {/** right */}
           <div className="flex-1">
               <form className="flex flex-col gap-4">
                  <div className="">
                   <Label value="Your username"/>
                     <TextInput type="text" placeholder="Username" id="username"/>
                  </div>

                  <div className="">
                   <Label value="Your email"/>
                     <TextInput type="text" placeholder="email" id="email"/>
                  </div>

                  <div className="">
                   <Label value="Your password"/>
                     <TextInput type="text" placeholder="password" id="password"/>
                  </div>
                  <Button gradientDuoTone="purpleToPink" type="submit">
                        Sign Up
                  </Button>
               </form>
                 <div className="">
                    <span>Have an account?</span>
                    <Link to="/sign-in" className="text-blue-500">Sign In</Link>
                 </div>
           </div>
        </div>
       
      </div>
    </>
  )
}

export default SignUp
