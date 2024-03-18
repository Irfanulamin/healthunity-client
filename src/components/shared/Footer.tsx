const Footer = () => {
  return (
    <div className="bg-[#1f1f1f] py-2 md:py-6 lg:py-12 px-2 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start pb-10 gap-2 md:gap-4 lg:gap-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl lg:text-4xl font-extrabold">HealthUnity</h1>
          <img src="/logo.jpg" alt="" className="w-10 h-10" />
        </div>
        <div>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            How to Donate
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Eligibility
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Donation Centers
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Track Your Donation
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            FAQs
          </p>
        </div>
        <div>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Resources
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Blog
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Success Stories
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Volunteer Opportunities
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Contact Us
          </p>
        </div>
        <div>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Support
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Help Center
          </p>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            Donate Now
          </p>
        </div>
      </div>
      <hr className="" />
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center pt-10">
        <div>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-[#a80000]">
            @ 2028. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-5 md:gap-x-10 lg:gap-x-12">
          <div>
            <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-[#a80000]">
              Terms of Service
            </p>
          </div>
          <div>
            <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-[#a80000]">
              Privacy Policy
            </p>
          </div>
          <div>
            <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-[#a80000]">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
