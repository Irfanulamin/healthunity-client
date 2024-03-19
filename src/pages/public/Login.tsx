import { NavLink, useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useLoginUserMutation } from "../../redux/feature/loginApi";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setUser } from "../../redux/feature/authSlice";

const login = () => {
  const navigate = useNavigate();
  const [login] = useLoginUserMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((store) => store.theme);
  const onSubmit = async (formData: FieldValues) => {
    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      const response: any = await login(loginData);

      if (response.data && response.data.success) {
        navigate("/");
        dispatch(
          setUser({ email: formData.email, token: response.data.token })
        );
        console.log("User Login successfully");
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 p-6 lg:p-12">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img src="/login.jpg" alt="" />
        </div>
        <div
          className={`${
            darkMode ? "border-white" : "border-black"
          } w-full md:w-1/2 lg:w-1/2 border-2 rounded-md p-8`}
        >
          <div>
            <h2 className="text-left text-3xl py-4 lg:text-5xl font-semibold  text-[#a80000]">
              Login!
            </h2>
            <p
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-sm  py-2 lg:py-4 text-left `}
            >
              Enter your email and password to access power of a admin.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-full">
                <label
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  }  text-left text-black font-semibold text-lg`}
                >
                  Email
                </label>
                <input
                  className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="email"
                  {...register("email")}
                  id="email"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  }  text-left text-black font-semibold text-lg`}
                >
                  Password
                </label>
                <input
                  className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="password"
                  {...register("password")}
                  id="password"
                />
              </div>
            </div>
            <div className="text-left py-2">
              <NavLink
                to="/register"
                className={`${
                  darkMode ? "text-white" : "text-black"
                }  hover:underline`}
              >
                If you are new,{" "}
                <span className="text-[#a80000]">Register Now</span>
              </NavLink>
            </div>

            <div className=" py-6">
              <button
                type="submit"
                className=" w-full rounded-sm border-none hover:bg-white bg-[#a80000] hover:text-[#a80000] border-white font-semibold  text-wgite py-3 transition_custom"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default login;
