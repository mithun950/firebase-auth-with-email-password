import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./Firebase-init";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

const Login = () => {

    const [showSuccess, setShowSuccess] = useState(false)
    const [showError,setShowError] = useState('')
    const emailRef = useRef()



    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // reset status
        setShowSuccess(false);
        setShowError('');

       // login user

       signInWithEmailAndPassword(auth,email,password)
       .then((result) => {
        console.log(result.user.message)
         
        if(!result.user.emailVerified){
            setShowError('Please verified your email')
        }
        else{
            setShowSuccess(true)  
        }
        

       

       })
       .catch(error =>{console.log('error dekhacche ', error)
       setShowError(error.message)})
    }
    //    forget password
       const handleForgetPassword = () => {
        console.log('get me an email password', emailRef.current.value)
           const email = emailRef.current.value;
           if(!email){
              toast.error('Please Provide a valid email Address')
           }
           else{
            sendPasswordResetEmail(auth,email)
            .then(() => {
                toast.info('Password reset email sent, Please Check your email')
            })
           }
       }




    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-14">
      <form  onSubmit={handleLogin}   className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" ref={emailRef} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label onClick={handleForgetPassword} className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
        showSuccess && <p className="text-green-500 ">User login Successfully</p>
      }
      {
        showError && <p className="text-red-600 ml-10">{showError}</p>
      }

      <p  className="ml-10">New to this website? please <Link to= "/register" className="underline">Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;