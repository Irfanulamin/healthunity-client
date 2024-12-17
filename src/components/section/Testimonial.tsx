import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetTestimonialsQuery } from "../../redux/feature/testimonialApi";
import HeadingText from "../ui/HeadingText";

const Testimonial = () => {
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
      <HeadingText
        title="Top 6 Provider Testimonials!"
        body="Recent Donors' Response: HealthUnity's compassionate donations resonate as a beacon of hope, making a tangible difference in post-disaster healthcare and community well-being."
      />

      <Slider {...settings} className="">
        {data &&
          data.slice(0, 6).map((testimonialData: any) => (
            <div key={testimonialData._id} className="p-4 rounded-md ">
              <div className=" bg-black/10 px-6 py-12 rounded-md ">
                <div>
                  <p className="text-left text-[#731010] mb-4 line-clamp-3">
                    "{testimonialData.comment}"
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
