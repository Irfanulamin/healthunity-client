import Container from "../../components/ui/Container";
import { useGetVolunteersQuery } from "../../redux/feature/volunteerApi";
import { useAppSelector } from "../../redux/hook";

const AboutUsPage = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { data } = useGetVolunteersQuery("");
  return (
    <div className=" min-h-[90vh] h-[100%]">
      <Container>
        <div className="mb-6 p-6 pt-8">
          <h2 className=" text-3xl lg:text-5xl font-semibold  text-[#a80000]">
            Our Dedicated Volunteers
          </h2>
          <div className="border-l-8 text-left border-[#a80000] rounded p-4">
            <p
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-left text-xs md:text-xl lg:text-xl p-2 lg:p-4  `}
            >
              Our volunteers are the backbone of our organization, selflessly
              dedicating their time and efforts to uplift our community's health
              and spirit. Their tireless commitment embodies the essence of
              compassion and solidarity, driving positive change with every act
              of kindness.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 py-12">
            {data &&
              data.map((volunteerData: any) => (
                <div
                  key={volunteerData._id}
                  className="hidden w-full md:flex lg:flex flex-col md:flex-row lg:flex-row justify-between items-center gap-6 border border-[#a80000] py-5 px-10 rounded-md bg-[#E2E5DE]"
                >
                  <p className="text-lg text-[#a80000] font-bold">
                    +{volunteerData.phone}
                  </p>
                  <p className="text-black text-lg font-bold">
                    {volunteerData.name}
                  </p>
                  <p className="text-green-600 text-lg font-bold">
                    {volunteerData.email}
                  </p>
                  <p className="text-red-600 text-lg font-bold">
                    {volunteerData.location}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className=" rounded-md border my-12">
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            } mb-4 text-left md:text-center lg:text-center text-xs md:text-lg lg:text-xl font-medium px-0 md:px-12 lg:px-12 py-0 md:py-6 lg:py-6`}
          >
            Established in <span className="text-[#a80000]">1998</span>,
            HealthUnity emerged with a clear purpose: to bolster community
            health and streamline the medical supply chain in the aftermath of
            disasters. Our goal is simple -
            <span className="text-[#a80000]">
              ensure swift and efficient access to vital healthcare resources
              when communities need it most.
            </span>
            Through collaboration and innovation, we aim to be the backbone that
            supports communities in rebuilding and recovering from the most
            challenging times. At HealthUnity, our commitment is grounded in the
            belief that even in the face of
            <span className="text-[#a80000]">
              {" "}
              adversity, unity and health{" "}
            </span>
            can prevail.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsPage;
