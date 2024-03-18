import Swal from "sweetalert2";
import { useCreateSupplyMutation } from "../../redux/feature/suppliesApi";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddSupply = () => {
  const [createSupplyMutation] = useCreateSupplyMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onsubmit = async (FormData: FieldValues) => {
    try {
      const supplyData = {
        image: FormData.image,
        title: FormData.title,
        category: FormData.category,
        description: FormData.description,
        amount: FormData.amount,
      };

      const { data }: any = await createSupplyMutation(supplyData);

      if (data && data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Your Supply Data has been Uploaded!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/supplies");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error creating supply:", error);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl lg:text-5xl font-semibold  text-[#a80000]">
          Create Supply Post!
        </h2>
        <p className="text-black text-xs md:text-lg lg:text-lg py-2 lg:py-4 text-left ">
          "Our form makes it easy to share supply details: upload an image, pick
          a category, add a title, specify the amount, and provide a brief
          description. Simplifying the process for quick and engaging supply
          contributions."
        </p>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col gap-1 ">
          <div className="flex flex-col  w-full  md:w-1/2 lg:w-1/2">
            <label className="text-black font-semibold text-lg">Image</label>
            <input
              className="focus:outline-[#a80000] text-black font-semibold rounded-md p-2 border-2 border-black"
              placeholder="Image"
              {...register("image")}
              id="image"
            />
          </div>
          <div className="flex flex-col w-full  md:w-1/2 lg:w-1/2 ">
            <label className="text-black font-semibold text-lg ">
              Category
            </label>
            <input
              className="focus:outline-[#a80000] text-black font-semibold rounded-md p-2 border-2 border-black"
              placeholder="Category"
              {...register("category")}
              id="category"
            />
          </div>
          <div className="flex flex-col w-full  md:w-1/2 lg:w-1/2 ">
            <label className="text-black font-semibold text-lg">Title</label>
            <input
              className="focus:outline-[#a80000] text-black font-semibold rounded-md p-2 border-2 border-black"
              placeholder="Title"
              {...register("title")}
              id="title"
            />
          </div>
          <div className="flex flex-col w-full  md:w-1/2 lg:w-1/2 ">
            <label className="text-black font-semibold text-lg">Amount</label>
            <input
              className="focus:outline-[#a80000] text-black font-semibold rounded-md p-2 border-2 border-black"
              placeholder="Amount"
              {...register("amount")}
              id="amount"
            />
          </div>
          <div className="flex flex-col w-full  md:w-1/2 lg:w-1/2 ">
            <label className="text-black font-semibold text-lg">
              Description
            </label>
            <textarea
              className=" resize-x focus:outline-[#a80000] text-black font-semibold rounded-md p-2 border-2 border-black"
              {...register("description")}
              id="description"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <div className="w-full py-6">
          <button
            type="submit"
            className=" w-full rounded-sm border-none hover:bg-white bg-[#731010] hover:text-[#731010] border-white text-white py-6 transition_custom"
          >
            Create A Supply Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSupply;
