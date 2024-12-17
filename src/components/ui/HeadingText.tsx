import { useAppSelector } from "@/redux/hook";

const HeadingText = ({ title, body }: { title: string; body: string }) => {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className="mb-2 md:mb-6 xl:mb-12">
      <h2 className=" text-3xl text-center lg:text-5xl font-semibold  text-[#a80000]">
        {title}
      </h2>
      <p
        className={`${
          darkMode ? "text-white" : "text-black"
        } text-xs md:text-lg lg:text-xl py-2 lg:py-4 text-center px-2`}
      >
        {body}
      </p>
    </div>
  );
};

export default HeadingText;
