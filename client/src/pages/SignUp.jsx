import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const Navigate =  useNavigate();

  const handleInputChange = (e) =>{
      setFormData({...formData, [e.target.id] : e.target.value.trim()});
  }

 const handleSubmit = async (e) =>{
  e.preventDefault();

  if(!formData.username || !formData.email || !formData.password){
    return setErrorMessage("Please fill out all fields")
  }
  
  try {
    setLoading(true);
    setErrorMessage(null)
    const res = await fetch("/api/auth/signup", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false){
      return setErrorMessage(data.message)
    }
    setLoading(false);
    if(res.ok){
      Navigate("/sign-in")
    }
  
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
    
  }


 }

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
               <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="">
                   <Label value="Your username"/>
                     <TextInput type="text" placeholder="Username" id="username" onChange={handleInputChange}/>
                  </div>

                  <div className="">
                   <Label value="Your email"/>
                     <TextInput type="text" placeholder="email" id="email" onChange={handleInputChange}/>
                  </div>

                  <div className="">
                   <Label value="Your password"/>
                     <TextInput type="text" placeholder="password" id="password" onChange={handleInputChange}/>
                  </div>
                  <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                        {
                          loading ? (
                           <>
                            <Spinner size="sm"/>
                            <span className="pl-3">Loading.....</span>
                           </>
                          ) : "Sign Up"
                        }
                  </Button>
               </form>
                 <div className="flex gap-2 text-sm mt-5">
                    <span>Have an account?</span>
                    <Link to="/sign-in" className="text-blue-500">Sign In</Link>
                 </div>
                 {errorMessage && (
                  <Alert className="mt-5" color="failure">
                    {errorMessage}
                  </Alert>
                 )}
           </div>
        </div>
       
      </div>
    </>
  )
}

export default SignUp
