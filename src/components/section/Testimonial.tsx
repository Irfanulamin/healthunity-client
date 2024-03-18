import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
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
        <p className="text-black text-xs md:text-lg lg:text-lg py-2 lg:py-4 text-center ">
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
        <div className="bg-white p-2 rounded-md border border-black">
          <div className=" bg-[#d4d4d4] px-6 py-12 rounded-md ">
            <div>
              <p className="text-left text-[#731010]">
                "HealthUnity's commitment to supporting communities through
                their impactful donations is truly a beacon of hope. Their
                dedication to post-disaster healthcare reflects a genuine act of
                kindness that makes a lasting difference."
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
                <p className="text-[#a80000] text-left">Emily Carter</p>
                <p className="text-[#a80000] text-left">
                  Disaster Relief Coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md border border-black">
          <div className="bg-[#d4d4d4] px-6 py-12 rounded-md">
            <div>
              <p className="text-left text-[#731010]">
                "HealthUnity's dedication to uplifting communities through
                impactful donations is a beacon of hope. Their unwavering
                commitment to post-disaster healthcare embodies a genuine act of
                kindness that creates a lasting impact."
              </p>
            </div>
            <hr className="border-[#707070] py-3" />
            <div className="flex justify-start items-center gap-2">
              <img
                src="/avatar.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-[#a80000] text-left">Michael Rodriguez</p>
                <p className="text-[#a80000] text-left">
                  Public Health Advocate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md border border-black">
          <div className="bg-[#d4d4d4] px-6 py-12 rounded-md">
            <div>
              <p className="text-left text-[#731010]">
                "HealthUnity's impactful donations serve as a beacon of hope for
                communities in need. Their dedication to post-disaster
                healthcare reflects a genuine act of kindness, leaving a
                meaningful and lasting difference."
              </p>
            </div>
            <hr className="border-[#707070] py-3" />
            <div className="flex justify-start items-center gap-2">
              <img
                src="/avatar.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-[#a80000] text-left">Olivia Thompson</p>
                <p className="text-[#a80000] text-left">
                  Community Health Worker
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md border border-black">
          <div className="bg-[#d4d4d4] px-6 py-12 rounded-md">
            <div>
              <p className="text-left text-[#731010]">
                "HealthUnity's compassionate approach to impactful donations is
                a source of hope for communities. Their dedicated post-disaster
                healthcare efforts reflect a genuine act of kindness, creating a
                lasting positive change."
              </p>
            </div>
            <hr className="border-[#707070] py-3" />
            <div className="flex justify-start items-center gap-2">
              <img
                src="/avatar.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-[#a80000] text-left">Daniel Martinez</p>
                <p className="text-[#a80000] text-left">
                  Healthcare Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md border border-black">
          <div className="bg-[#d4d4d4] px-6 py-12 rounded-md">
            <div>
              <p className="text-left text-[#731010]">
                "HealthUnity's unwavering support to communities through
                impactful donations is a true beacon of hope. Their commitment
                to post-disaster healthcare reflects a genuine act of kindness
                that resonates with lasting positive change."
              </p>
            </div>
            <hr className="border-[#707070] py-3" />
            <div className="flex justify-start items-center gap-2">
              <img
                src="/avatar.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-[#a80000] text-left">Sophie Turner</p>
                <p className="text-[#a80000] text-left">
                  Emergency Response Coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md border border-black">
          <div className="bg-[#d4d4d4] px-6 py-12 rounded-md">
            <div>
              <p className="text-left text-[#731010]">
                "HealthUnity's impactful donations bring hope to communities in
                need. Their dedication to post-disaster healthcare reflects a
                genuine act of kindness, leaving a meaningful and enduring
                impact."
              </p>
            </div>
            <hr className="border-[#707070] py-3" />
            <div className="flex justify-start items-center gap-2">
              <img
                src="/avatar.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-[#a80000] text-left">Nathan Reynolds</p>
                <p className="text-[#a80000] text-left">
                  Emergency Response Coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md border border-black">
          <div className="bg-[#d4d4d4] px-6 py-12 rounded-md">
            <div>
              <p className="text-left text-[#731010]">
                "HealthUnity's commitment to impactful donations is a beacon of
                hope for communities. Their dedication to post-disaster
                healthcare reflects a genuine act of kindness, creating a
                lasting and positive difference."
              </p>
            </div>
            <hr className="border-[#707070] py-3" />
            <div className="flex justify-start items-center gap-2">
              <img
                src="/avatar.jpg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-[#a80000] text-left">Isabella Adams</p>
                <p className="text-[#a80000] text-left">
                  Community Health Advocate
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
