import Container from "../../components/ui/Container";
import { useGetDonationsQuery } from "../../redux/feature/donationApi";
import { useAppSelector } from "../../redux/hook";

const Leaderboard = () => {
  const { data } = useGetDonationsQuery("");
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className=" min-h-[90vh] h-[100%] pb-20">
      <Container>
        <div>
          <div className="mb-6 p-6 pt-8">
            <h2 className=" text-3xl lg:text-5xl font-semibold  text-[#a80000]">
              Explore Generosity: Our Honors Leaderboard
            </h2>
            <div className="border-l-8 text-left border-[#a80000] rounded p-12">
              <p
                className={`${
                  darkMode ? "text-white" : "text-black"
                } text-left text-xs md:text-xl lg:text-xl p-2 lg:p-4  `}
              >
                Discover the names of our top donors and their impactful
                contributions on our Honors Leaderboard. Join us in recognizing
                their generosity and commitment to supporting relief efforts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-start  gap-6">
            {data &&
              data
                .slice()
                .reverse()
                .map((donationPost: any, index: number) => (
                  <div className="border bg-[#dcdad8] border-black p-5 w-full md:w-1/2 lg:w-1/2 rounded-md flex justify-evenly items-center gap-5 flex-wrap">
                    <div>
                      <h4 className="text-[#a80000] text-3xl lg:text-5xl font-bold">
                        #{index + 1}
                      </h4>
                    </div>
                    <div>
                      <img
                        src={donationPost.data.image}
                        className="w-24 md:w-44 lg:w-44 object-cover h-24 md:h-44 lg:h-44"
                      />
                    </div>

                    <div>
                      <div>
                        <p className="text-xl text-left text-[#a80000] font-semibold ">
                          {donationPost.data.title}
                        </p>
                      </div>
                      <div>
                        <p className="text-xl text-left text-black font-semibold ">
                          Donor's Email :-{" "}
                          <span className="text-green-600">
                            {donationPost.userEmail}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xl text-left text-red-700 font-semibold ">
                          {donationPost.data.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Leaderboard;
