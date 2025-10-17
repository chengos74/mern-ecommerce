import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginIcons from "../assest/signin.gif";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icon" srcset="" />
          </div>
          <form className="pt-6">
            <div className="grid">
              <label htmlFor="">Email : </label>
              <div className="bg-slate-200 p-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="">Password : </label>
              <div className="bg-slate-200 p-3 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setshowPassword(!showPassword)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600 mt-1"
              >
                Forget Password ?
              </Link>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
