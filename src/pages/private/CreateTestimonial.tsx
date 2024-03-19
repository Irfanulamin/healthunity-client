import { FieldValues, useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import { useCreateTestimonialsMutation } from "../../redux/feature/testimonialApi";
import Swal from "sweetalert2";

const CreateTestimonial = () => {
  const { register, handleSubmit } = useForm();
  const [createTestimonial] = useCreateTestimonialsMutation();

  const { darkMode } = useAppSelector((store) => store.theme);
  const onSubmit = async (formData: FieldValues) => {
    try {
      const testimonialData = {
        name: formData.name,
        occupation: formData.occupation,
        comment: formData.comment,
      };
      console.log(testimonialData);

      const response: any = await createTestimonial(testimonialData);

      if (response.data && response.data.acknowledged === true) {
        Swal.fire({
          icon: "success",
          title: "Your Testimonial has been Uploaded!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl lg:text-5xl font-semibold  text-[#a80000]">
          Create a Testimonial!
        </h2>
        <p className="text-black text-xs md:text-lg lg:text-lg py-2 lg:py-4 text-left ">
          "Exceptional service! The team at HealthUnity went above and beyond to
          address my concerns and provided compassionate care every step of the
          way. I highly recommend their expertise to anyone seeking quality
          healthcare solutions."
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
              Name
            </label>
            <input
              className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
              placeholder="name"
              {...register("name")}
              id="name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className={`${
                darkMode ? "text-white" : "text-black"
              }  text-left text-black font-semibold text-lg`}
            >
              Occupation
            </label>
            <input
              className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
              placeholder="occupation"
              {...register("occupation")}
              id="occupation"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className={`${
                darkMode ? "text-white" : "text-black"
              }  text-left text-black font-semibold text-lg`}
            >
              Comment
            </label>
            <textarea
              className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
              placeholder="comment"
              {...register("comment")}
              id="comment"
            />
          </div>
        </div>

        <div className=" py-6">
          <button
            type="submit"
            className=" w-full rounded-sm border-none hover:bg-white bg-[#a80000] hover:text-[#a80000] border-white font-semibold  text-wgite py-3 transition_custom"
          >
            Create Testimonial
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonial;
