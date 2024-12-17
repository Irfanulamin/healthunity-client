import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingText from "../ui/HeadingText";

const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
    <div className="pt-10 pb-20 p-6">
      <HeadingText
        title="Unity in Action!"
        body="Our recent donations are a powerful testament to the impact we're making. Through your generosity, essential medical supplies have swiftly reached communities in need, empowering healthcare providers and fostering
 resilience in the aftermath of disasters."
      />
      <Slider {...settings}>
        <div>
          <img
            src="/gallery/1.jpg"
            alt=""
            className="w-full h-96 object-cover  p-2"
          />
        </div>
        <div>
          <img
            src="/gallery/2.jpg"
            alt=""
            className="w-full h-96 object-cover  p-2"
          />
        </div>
        <div>
          <img
            src="/gallery/3.jpg"
            alt=""
            className="w-full h-96 object-cover  p-2"
          />
        </div>
        <div>
          <img
            src="/gallery/4.jpg"
            alt=""
            className="w-full h-96 object-cover  p-2"
          />
        </div>
        <div>
          <img
            src="/gallery/5.jpg"
            alt=""
            className="w-full h-96 object-cover  p-2"
          />
        </div>
        <div>
          <img
            src="/gallery/6.jpg"
            alt=""
            className="w-full h-96 object-cover  p-2"
          />
        </div>
        <div>
          <img
            src="/gallery/7.jpg"
            alt=""
            className="w-full h-96 object-cover  p-2"
          />
        </div>
        <div>
          <img
            src="/gallery/8.jpg"
            alt=""
            className="w-full h-96 object-cover  p-2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
