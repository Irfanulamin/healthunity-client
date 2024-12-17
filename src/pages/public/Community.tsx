import { FieldValues, useForm } from "react-hook-form";
import Container from "../../components/ui/Container";
import {
  useCreateCommentsMutation,
  useGetCommentsQuery,
} from "../../redux/feature/commentApi";
import Swal from "sweetalert2";
import HeadingText from "@/components/ui/HeadingText";

const Community = () => {
  const { register, handleSubmit } = useForm();
  const [createComments] = useCreateCommentsMutation();
  const onSubmit = async (formData: FieldValues) => {
    try {
      const commentData = {
        comment: formData.comment,
      };

      const response: any = await createComments(commentData);

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
    <div className=" min-h-[90vh] h-[100%] pb-10">
      <Container>
        <div className="p-2 ">
          <div className="pt-1 md:pt-6 xl:pt-12">
            <HeadingText
              title="Welcome to Our Community Gratitude Wall!"
              body="Community Gratitude Wall: Where Support Shines Bright. Share Your
 Thoughts, Lift Spirits High."
            />
          </div>
          <div>
            <h2 className="text-left text-xl lg:text-3xl font-semibold py-2 text-[#a80000]">
              Post Your Comment
            </h2>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col w-full">
                    <input
                      className="focus:border-b-[#a80000] text-black focus:text-[#a80000] font-semibold p-2 border-b-2 outline-none border-black"
                      placeholder="comment"
                      {...register("comment")}
                      id="comment"
                      required
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
            <div className="py-12">
              <h2 className=" text-center text-xl lg:text-3xl rounded-md font-semibold p-2 bg-[#a80000] text-white">
                Comment Section
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {data &&
                data
                  .slice()
                  .reverse()
                  .map((commentData: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-400 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src="/avatar.jpg"
                            alt="User avatar"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div>
                            <p className="text-sm font-semibold text-gray-700">
                              Comment No. {index + 1}
                            </p>
                            <p className="text-xs text-gray-500">
                              HealthUnity user
                            </p>
                          </div>
                        </div>
                        <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                          {commentData.comment}
                        </p>
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
