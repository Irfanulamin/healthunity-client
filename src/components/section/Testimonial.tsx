import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "../../redux/hook";
import { useGetTestimonialsQuery } from "../../redux/feature/testimonialApi";

const Testimonial = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { data } = useGetTestimonialsQuery("");
  const settings = {
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 1500,
    lazyload: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-10 pb-20 p-3">
      <div className="p-6">
        <h2 className="text-3xl lg:text-5xl font-semibold  text-[#a80000]">
          Top 6 Provider Testimonials!
        </h2>
        <p
          className={`${
            darkMode ? "text-white" : "text-black"
          }  text-xs md:text-lg lg:text-lg py-2 lg:py-4 text-center `}
        >
          <span className="text-[#a80000]">"Recent Donors' Response:</span>{" "}
          HealthUnity's compassionate donations resonate as a beacon of hope,
          making a tangible difference in post-disaster{" "}
          <span className="text-[#a80000]">
            healthcare and community well-being
          </span>
          ."
        </p>
      </div>

      <Slider {...settings} className="">
        {data &&
          data.slice(0, 6).map((testimonialData: any) => (
            <div
              key={testimonialData._id}
              className="bg-white p-2 rounded-md border border-black"
            >
              <div className=" bg-[#d4d4d4] px-6 py-12 rounded-md ">
                <div>
                  <p className="text-left text-[#731010]">
                    {testimonialData.comment}
                  </p>
                </div>
                <hr className="border-[#707070] py-3" />
                <div className="flex justify-start items-center gap-2 ">
                  <img
                    src="/avatar.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-[#a80000] text-left">
                      {testimonialData.name}
                    </p>
                    <p className="text-[#a80000] text-left">
                      {testimonialData.occupation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
