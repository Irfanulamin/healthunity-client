import { FieldValues, useForm } from "react-hook-form";
import Container from "../../components/ui/Container";
import {
  useCreateCommentsMutation,
  useGetCommentsQuery,
} from "../../redux/feature/commentApi";
import Swal from "sweetalert2";
import { useAppSelector } from "../../redux/hook";

const Community = () => {
  const { register, handleSubmit } = useForm();
  const { darkMode } = useAppSelector((store) => store.theme);
  const [createComments] = useCreateCommentsMutation();
  const onSubmit = async (formData: FieldValues) => {
    try {
      const commentData = {
        comment: formData.comment,
      };

      const response: any = await createComments(commentData);
      console.log(response);

      if (response.data && response.data.acknowledged === true) {
        console.log("Comment has been added successfully");
        Swal.fire({
          icon: "success",
          title: "Your Comment has been Uploaded!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      console.error("Error during posting:", error.message);
    }
  };

  const { data } = useGetCommentsQuery("");
  return (
    <div className=" min-h-[90vh] h-[100%]">
      <Container>
        <div className="p-2 ">
          <div className="mb-6 p-6 pt-8">
            <h2 className=" text-3xl lg:text-5xl font-semibold  text-[#a80000]">
              Welcome to Our Community Gratitude Wall!
            </h2>
            <p
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-black text-xs md:text-lg lg:text-lg py-2 lg:py-4 text-center `}
            >
              Community Gratitude Wall: Where Support Shines Bright. Share Your
              Thanks, Lift Spirits High.
            </p>
          </div>
          <div className="border border-black rounded-md p-6 bg-[#e8e6e5]">
            <h2 className="text-left text-3xl lg:text-5xl font-semibold py-2 text-[#a80000]">
              Post Your Comment
            </h2>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col w-full">
                    <input
                      className="focus:border-b-[#a80000] text-black focus:text-[#a80000] font-semibold p-2 border-b-2 outline-none border-black bg-[#e8e6e5]"
                      placeholder="comment"
                      {...register("comment")}
                      id="comment"
                    />
                  </div>
                </div>
                <div className="text-right p-6">
                  <button
                    type="submit"
                    className=" px-12 rounded-md border-none hover:bg-white bg-[#a80000] hover:text-[#a80000] border-white font-semibold  text-wgite py-3 transition_custom"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="py-3">
              <h2 className="text-left text-3xl lg:text-5xl rounded-md font-semibold p-2 bg-[#a80000] text-white">
                Comment Section
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 p-2">
              {data &&
                data
                  .slice()
                  .reverse()
                  .map((commentData: any, index: number) => (
                    <div className="bg-white p-2 rounded-md border border-black w-full">
                      <div className="bg-[#d4d4d4] px-6 py-6 rounded-md">
                        <div>
                          <p className="text-left text-xl text-[#731010] py-2">
                            {commentData.comment}
                          </p>
                        </div>
                        <div className="flex justify-between items-center gap-2 py-2">
                          <img
                            src="/avatar.jpg"
                            alt=""
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <p className="text-[#a80000] text-left">
                              Comment No. {index + 1}
                            </p>
                            <p className="text-[#a80000] text-left">
                              HealthUnity users
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Community;
