import Container from "../ui/Container";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useAppSelector } from "../../redux/hook";
const AboutUs = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  });
  return (
    <div className="pb-24 pt-12">
      <div className="bg-[#a80000] text-center pt-4 md:pt-24 lg:pt-24 pb-4 md:pb-32 lg:pb-44">
        <h1 className="text-lg md:text-3xl lg:text-5xl font-semibold p-4">
          About us
        </h1>
      </div>
      <Container>
        <motion.div
          variants={{
            hidden: { opacity: 0.5, y: 150, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
          ref={ref}
          className="w-full mb-4"
        >
          <img
            src="/aboutus.jpg"
            className="transition_custom hover:blur-sm -mt-6 md:-mt-36 lg:-mt-36 w-full md:w-2/4 lg:w-2/4 mx-auto"
          />
        </motion.div>

        <p
          className={`${
            darkMode ? "text-white" : "text-black"
          } mb-4 text-left md:text-center lg:text-center text-xs md:text-lg lg:text-xl font-medium px-0 md:px-12 lg:px-12 py-0 md:py-6 lg:py-6`}
        >
          Established in <span className="text-[#a80000]">1998</span>,
          HealthUnity emerged with a clear purpose: to bolster community health
          and streamline the medical supply chain in the aftermath of disasters.
          Our goal is simple -
          <span className="text-[#a80000]">
            ensure swift and efficient access to vital healthcare resources when
            communities need it most.
          </span>
          Through collaboration and innovation, we aim to be the backbone that
          supports communities in rebuilding and recovering from the most
          challenging times. At HealthUnity, our commitment is grounded in the
          belief that even in the face of
          <span className="text-[#a80000]"> adversity, unity and health </span>
          can prevail.
        </p>
      </Container>
    </div>
  );
};

export default AboutUs;
