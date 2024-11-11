import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "./Firebase-init";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault(); //eta dewa hoe jeno data reload naa hoe
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const name = event.target.name.value;
    const PhotoUrl = event.target.PhotoUrl.value;

    //    reset error and status

    setErrorMessage("");

    // reset success and status
    setSuccess("");

    // 6 character er niche jodi pass dei errro dibe

    if (password < 6) {
      setErrorMessage("password should be 6 character or longer");
      return;
    }

    if(!terms){
        setErrorMessage('Please accept our terms and condition')
    }

    //    create auth with password and email

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
        toast.success("Registration Successful!");


         // email validation cheak
         sendEmailVerification(auth.currentUser)
         .then((result) => {
             console.log(result)
 
         })

        //  update profile name amd photo url

        const profile ={
            displayName: name,
            photoURL:PhotoUrl,
        }
        updateProfile(auth.currentUser,profile)
        .then((result) => {
            console.log(result)
        })
      })
      .catch((error) => {
        console.log("error dekhaise", error.message);

        setErrorMessage(error.message);
        setSuccess(false);
        toast.error("Error!");
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 shadow-2xl rounded-2xl px-8 py-14">
      <h2 className="text-4xl my-5">Register</h2>
      <form onSubmit={handleRegister}>
        

        {/* name input */}
      <label className="input input-bordered flex items-center gap-2">
          
            
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="Name"
          />
        </label>

        {/* photo url input */}
      <label className="input input-bordered flex items-center gap-2 mt-4">
          
            
          <input
            type="text"
            name="PhotoUrl"
            className="grow"
            placeholder="Photo URL"
          />
        </label>
      
      {/* email input */}
        <label className="input input-bordered flex items-center gap-2 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>

        {/* password input */}
        <label className="input input-bordered flex items-center gap-2 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={showPass ? "text" : "password"}  //icon change korar jonno
            name="password"
            className="grow"
            placeholder="password"
            required
          />
          <button onClick={() => setShowPass(!showPass)} className="btn btn-xs">
            {showPass ? <FaEyeSlash /> : <FaRegEye />}
          </button>
        </label>

        {/* cheake box treams condition  */}
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
           
            <input type="checkbox"  className="checkbox" name="terms" required />
            <span className="label-text">Accept our terms and condition</span>
          </label>
        </div>
        <button className="btn btn-secondary btn-wide mt-5 ">Login</button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {
        success && <p className="text-green-400">Register  successfully</p>
      }

      <p className="m-3">Allready have an account? please <Link to="/login" className="underline">Login</Link></p>
    </div>
  );
};

export default Register;
