import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.5, type: "tween" },
    });
  });
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={controls}>
      <section className="banner h-[50vh] lg:h-[90vh] my-1">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <div>
            <p className="text-xl md:text-5xl lg:text-5xl p-3 font-medium text-white primary_text text-center">
              <span className="text-[#731010] mx-3 text-xl md:text-4xl lg:text-5xl">
                "
              </span>
              Empower Healing, Extend Hope
              <span className="text-[#a80000] "> Donate Now</span> to Support
              Access to Medicine! Together, Let's Bridge the Gap to Health and
              Well-being.
              <span className="text-[#731010] mx-3 text-xl md:text-4xl lg:text-5xl">
                "
              </span>
            </p>
          </div>
          <div>
            <div>
              <p className="text-[#d4d4d4] text-xs p-3 lg:text-lg text-center font-normal mt-1">
                Fueling Health, Igniting Hope: Your Donation, Their Medicine.
                Join Us in Making Wellness Accessible for All.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-7">
            <button className=" rounded-sm border-none hover:bg-white bg-[#731010] hover:text-[#731010] border-white text-white px-3 py-1 transition_custom">
              Donate Now
            </button>
            <button className="rounded-sm btn-outline border-white hover:border-[#731010] hover:text-[#731010] text-white hover:bg-white px-3 py-1 transition_custom">
              About Us
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Banner;
