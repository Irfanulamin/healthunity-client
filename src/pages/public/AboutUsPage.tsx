import HeadingText from "@/components/ui/HeadingText";
import Container from "../../components/ui/Container";
import { useGetVolunteersQuery } from "../../redux/feature/volunteerApi";
import { useAppSelector } from "../../redux/hook";

const OurVolunteers = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const { data } = useGetVolunteersQuery("");
  return (
    <div className=" min-h-[90vh] h-[100%]">
      <Container>
        <div className="pt-1 md:pt-6 xl:pt-8">
          <HeadingText
            title="Our Dedicated Volunteers"
            body="Our volunteers are the backbone of our organization, selflessly
              dedicating their time and efforts to uplift our community's health
              and spirit. Their tireless commitment embodies the essence of
              compassion and solidarity, driving positive change with every act
              of kindness.
"
          />

          <div className="flex flex-col justify-center items-center gap-6 py-12">
            {data && (
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 text-black py-2 text-left">
                        Phone
                      </th>
                      <th className="border border-gray-300 px-4 text-black py-2 text-left">
                        Name
                      </th>
                      <th className="border border-gray-300 px-4 text-black py-2 text-left">
                        Email
                      </th>
                      <th className="border border-gray-300 px-4 text-black py-2 text-left">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((volunteerData: any) => (
                      <tr
                        key={volunteerData._id}
                        className="bg-gray-100 even:bg-white"
                      >
                        <td className="border border-gray-300 px-4 py-2 text-black font-semibold">
                          +{volunteerData.phone}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-black font-semibold">
                          {volunteerData.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-black font-semibold">
                          {volunteerData.email}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-black font-semibold">
                          {volunteerData.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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

export default OurVolunteers;
