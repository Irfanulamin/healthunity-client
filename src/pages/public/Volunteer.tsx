import { FieldValues, useForm } from "react-hook-form";
import Container from "../../components/ui/Container";

import { useAppSelector } from "../../redux/hook";
import { useCreateVolunteersMutation } from "../../redux/feature/volunteerApi";
import Swal from "sweetalert2";

const Volunteer = () => {
  const [createVolunteer] = useCreateVolunteersMutation();
  const { register, handleSubmit } = useForm();
  const { darkMode } = useAppSelector((store) => store.theme);

  const onSubmit = async (formData: FieldValues) => {
    try {
      const volunteerData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        gender: formData.gender,
      };

      //  Assuming registration is an asynchronous function that returns a promise
      const response: any = await createVolunteer(volunteerData);
      if (response.data && response.data.acknowledged === true) {
        Swal.fire({
          icon: "success",
          title: "Your Volunteer Data has been Uploaded!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      console.error("Error during registration:", error.message);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };
  return (
    <Container>
      <div className="flex flex-col  lg:flex-row justify-center items-center gap-10 p-6 lg:p-12">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img src="/volunteer.jpg" alt="" />
        </div>
        <div
          className={`${
            darkMode ? "border-white" : "border-black"
          } w-full lg:w-1/2 border-2 rounded-md p-8`}
        >
          <div>
            <h2 className="text-left text-3xl py-4 lg:text-5xl font-semibold  text-[#008055]">
              Be a Volunteer!
            </h2>
            <p
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-sm  py-2 lg:py-4 text-left `}
            >
              Volunteering for HealthUnity allows{" "}
              <span className="text-[#008055]">
                you to support vital health initiatives, fostering a stronger,
                healthier community
              </span>{" "}
              while enriching your own sense of purpose and connection.
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
                  Name
                </label>
                <input
                  required
                  className="focus:outline-[#008055] text-[#008055] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="name"
                  {...register("name")}
                  id="name"
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
                  required
                  className="focus:outline-[#008055] text-[#008055] font-semibold rounded-md p-2 border-2 border-black"
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
                  Phone
                </label>
                <input
                  required
                  className="focus:outline-[#008055] text-[#008055] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="phone"
                  {...register("phone")}
                  id="phone"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } text-left font-semibold text-lg`}
                >
                  Location
                </label>
                <input
                  required
                  className="focus:outline-[#008055] text-[#008055] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="location"
                  {...register("location")}
                  id="location"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } text-left font-semibold text-lg`}
                >
                  Gender
                </label>
                <input
                  required
                  className="focus:outline-[#008055] text-[#008055] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="gender"
                  {...register("gender")}
                  id="gender"
                />
              </div>
            </div>
            <div className=" py-6">
              <button
                type="submit"
                className=" w-full rounded-sm border-none hover:bg-white bg-[#008055] hover:text-[#008055] border-white font-semibold  text-wgite py-3 transition_custom"
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

export default Volunteer;
