import { Collapse, Divider } from "antd";
import Container from "../ui/Container";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Accordion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  });
  return (
    <Container>
      <motion.div
        variants={{
          hidden: { opacity: 0.9, scale: 1.05, y: -100 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        ref={ref}
        className="border-2 border-black pb-2 rounded-md"
      >
        <div>
          <h2 className=" text-3xl lg:text-5xl font-semibold  text-white bg-[#1f1f1f] py-4 rounded">
            Most Asked Questions!
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center ">
          <div className="w-3/4 md:w-2/6 lg:w-2/6">
            <img src="/accordion.jpg" alt="" className="w-full" />
          </div>
          <div className="w-full md:w-4/6 lg:w-4/6 p-6">
            <Divider orientation="left"></Divider>
            <Collapse
              className="bg-[#a80000] text-white "
              size="large"
              items={[
                {
                  key: "1",
                  label: "Why should I consider making a donation?",
                  children: (
                    <p className="text-black font-semibold">
                      Your donation can make a significant impact on our mission
                      to [organization's mission]. By contributing, you directly
                      support initiatives that create positive change, whether
                      it's providing essential resources, supporting community
                      projects, or empowering individuals in need. Every
                      donation, no matter the size, plays a crucial role in
                      building a better tomorrow.
                    </p>
                  ),
                },
                {
                  key: "2",
                  label:
                    "How can I be sure my donation will be used effectively?",
                  children: (
                    <p className="text-black font-semibold">
                      We prioritize transparency and accountability. Your
                      donation will be directed towards carefully vetted
                      projects and programs, ensuring it has a meaningful and
                      efficient impact on the causes we champion.
                    </p>
                  ),
                },
                {
                  key: "3",
                  label: "Is my donation tax-deductible?",
                  children: (
                    <p className="text-black font-semibold">
                      Yes, your generosity is rewarded! We are a registered
                      nonprofit, and your donation is tax-deductible to the
                      extent allowed by law. You'll receive a confirmation for
                      your records after each donation.
                    </p>
                  ),
                },
                {
                  key: "4",
                  label: "Can I choose where my donation goes?",
                  children: (
                    <p className="text-black font-semibold">
                      Absolutely! During the donation process, you have the
                      option to designate your gift to a specific cause or allow
                      us to allocate it where it's needed most. Your choice
                      empowers you to tailor your impact.
                    </p>
                  ),
                },
                {
                  key: "5",
                  label:
                    "How often will I receive updates on the impact of my donation?",
                  children: (
                    <p className="text-black font-semibold">
                      We keep you informed! Subscribers to our newsletter
                      receive regular updates on how their contributions are
                      making a difference. From success stories to project
                      milestones, you'll be part of the journey.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Accordion;
