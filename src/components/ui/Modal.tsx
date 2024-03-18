import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUpdateSupplyMutation } from "../../redux/feature/suppliesApi";
import Swal from "sweetalert2";
import { TFetchData } from "../../utils/Type";

type ModalProps = {
  supply: TFetchData | null;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ supply, onClose }) => {
  const [updateSupplyMutation] = useUpdateSupplyMutation();

  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (FormData) => {
    try {
      const updatedsupplyData: TFetchData = {
        image: FormData.image,
        title: FormData.title,
        category: FormData.category,
        description: FormData.description,
        amount: FormData.amount,
      };
      const { data }: any = await updateSupplyMutation({
        id: supply!._id,
        updatedSupply: updatedsupplyData,
      });
      console.log(data);
      if (data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Your Supply Data has been Updated!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch {
      console.error("error");
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md  rounded-2xl overflow-hidden">
          <div className="p-5 lg:p-11">
            <div>
              <div>
                <h2 className="text-3xl lg:text-5xl font-semibold  text-[#a80000]">
                  Update Supply Post!
                </h2>
                <p className="text-black text-xs md:text-lg lg:text-lg py-2 lg:py-4 text-left ">
                  "Our form makes it easy to update supply details: update an
                  image, pick a category, update a title, specify the amount,
                  and provide a brief description. Simplifying the process for
                  quick and engaging supply contributions."
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-1 ">
                  <div className="flex flex-col w-full">
                    <label className="text-black font-semibold text-lg">
                      Image
                    </label>
                    <input
                      className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                      placeholder="Image"
                      {...register("image")}
                      id="image"
                      defaultValue={supply!.image}
                    />
                  </div>
                  <div className="flex flex-col w-full ">
                    <label className="text-black font-semibold text-lg ">
                      Category
                    </label>
                    <input
                      defaultValue={supply!.category}
                      className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                      placeholder="Category"
                      {...register("category")}
                      id="category"
                    />
                  </div>
                  <div className="flex flex-col w-full ">
                    <label className="text-black font-semibold text-lg">
                      Title
                    </label>
                    <input
                      defaultValue={supply!.title}
                      className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                      placeholder="Title"
                      {...register("title")}
                      id="title"
                    />
                  </div>
                  <div className="flex flex-col w-full ">
                    <label className="text-black font-semibold text-lg">
                      Amount
                    </label>
                    <input
                      defaultValue={supply!.amount}
                      className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                      placeholder="Amount"
                      {...register("amount")}
                      id="amount"
                    />
                  </div>
                  <div className="flex flex-col w-full ">
                    <label className="text-black font-semibold text-lg">
                      Description
                    </label>
                    <textarea
                      className=" resize-x focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                      {...register("description")}
                      id="description"
                      defaultValue={supply!.description}
                      placeholder="Description"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full py-6">
                  <button
                    type="submit"
                    className=" w-full rounded-sm border-none hover:bg-white bg-yellow-500 hover:text-yellow-500 border-white font-semibold text-black py-3 transition_custom"
                  >
                    Update Supply Post
                  </button>
                </div>
              </form>
            </div>
            <a
              onClick={onClose}
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
            >
              Close The Modal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
