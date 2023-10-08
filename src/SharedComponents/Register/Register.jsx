
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
    const {createUser, googleLogin} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleRegister = (e) => {
        e.preventDefault();
        setSuccess('')
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
        .then(res => setSuccess(res.user))
        .catch(error => setError(error.message))
    }
    const handleWithGool = () => {
        googleLogin()
        .then(res => console.log(res.user))
        .catch(error => setError(error.message))
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-green-400">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your First Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-info text-white">Register</button>
                </div>
              </form>
              <a href="">
                You Are Now?{" "}
                <Link to="/login" className="text-green-600 font-bold">
                  Login
                </Link>
              </a>
              <button onClick={handleWithGool} className="btn btn-outline btn-success">Google</button>
              {
                success && swal("Good job!", "You clicked the button!", "success")
              }
              {
                error && swal("error!", "You clicked the button!", "success")
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
