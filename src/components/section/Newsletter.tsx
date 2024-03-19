import { MailCheck } from "lucide-react";
import { useAppSelector } from "../../redux/hook";

const Newsletter = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className="w-full bg-[#741010] p-20  left_clip_path pb-20  lg:pb-20 mt-10 md:mt-16 lg:mt-16">
      <div className="flex justify-center items-center gap-2  mt-24">
        <MailCheck className="text-white" size={100} />
        <p className="text-white text-xl md:text-4xl lg:text-4xl font-semibold">
          Subscribe to Our Newsletter
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <p className="text-white text-xs md:text-base lg:text-base font-light py-2 md:py-12 lg:py-12 w-full lg:w-2/4 text-center">
          Make a difference with just a click! Subscribe to our newsletter and
          be the first to know about impactful donations, inspiring stories, and
          opportunities to join our mission. Your inbox, filled with hope and
          change. Subscribe now!!
        </p>
      </div>
      <div className="w-full py-4">
        <form
          action=""
          className="w-full flex justify-center items-center gap-1"
        >
          <input
            placeholder="E-mail"
            className={`${
              darkMode ? "bg-[#8b837e]" : "bg-white"
            } text-black w-full md:w-2/4 lg:w-1/4 pl-4 py-4 focus:outline-[#731010] rounded-md`}
          />
          <button className="btn rounded-md btn-outline border-white hover:border-[#731010] hover:text-[#731010] text-white hover:bg-white px-3 py-4 transition_custom">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
