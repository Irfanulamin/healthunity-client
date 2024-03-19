import { FieldValues, useForm } from "react-hook-form";
import Container from "../../components/ui/Container";
import { useRegisterUserMutation } from "../../redux/feature/registerApi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const Register = () => {
  const navigate = useNavigate();
  const [registration] = useRegisterUserMutation();
  const { register, handleSubmit } = useForm();
  const { darkMode } = useAppSelector((store) => store.theme);

  const onSubmit = async (formData: FieldValues) => {
    try {
      const registerData = {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      };

      // Assuming registration is an asynchronous function that returns a promise
      const response: any = await registration(registerData);

      // Check the response for success or handle accordingly
      if (response.data && response.data.success) {
        navigate("/login");
        console.log("User registered successfully");
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error: any) {
      console.error("Error during registration:", error.message);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 p-6 lg:p-12">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img src="/register.jpg" alt="" />
        </div>
        <div
          className={`${
            darkMode ? "border-white" : "border-black"
          } w-full md:w-1/2 lg:w-1/2 border-2 rounded-md p-8`}
        >
          <div>
            <h2 className="text-left text-3xl py-4 lg:text-5xl font-semibold  text-[#a80000]">
              Register!
            </h2>
            <p
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-sm  py-2 lg:py-4 text-left `}
            >
              "After registration, you'll be{" "}
              <span className="text-red-500">
                redirected to the login page.{" "}
              </span>{" "}
              Enter your email and password to access your account. Thank you
              for choosing our platform."
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-full">
                <label
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } text-left font-semibold text-lg`}
                >
                  Username
                </label>
                <input
                  className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="username"
                  {...register("username")}
                  id="username"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } text-left font-semibold text-lg`}
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
                  } text-left font-semibold text-lg`}
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
            <div className=" py-6">
              <button
                type="submit"
                className=" w-full rounded-sm border-none hover:bg-white bg-[#a80000] hover:text-[#a80000] border-white font-semibold  text-wgite py-3 transition_custom"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
