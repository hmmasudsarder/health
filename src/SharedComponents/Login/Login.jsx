import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Login = () => {

    const {userLogin, googleLogin} = useContext(AuthContext)
    const handleLogin = (e) => {
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
        .then(res => {
            swal("Good job!", "You clicked the button!", "success",res.user)})
        .catch(error => swal("error!", "You clicked the button!", "success", error.message))
    }
    const handleWithGool = () => {
        googleLogin()
        .then(res => console.log(res.user))
        .catch(error => console.log(error.message))
    }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-green-400">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
                <button className="btn btn-info text-white">Login</button>
              </div>
            </form>
            <a href="">
              You Are Now?{" "}
              <Link to="/register" className="text-green-600 font-bold">
                Register
              </Link>{" "}
            </a>
            <button onClick={handleWithGool} className="btn btn-outline btn-success">Google</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
