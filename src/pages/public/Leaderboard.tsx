import HeadingText from "@/components/ui/HeadingText";
import Container from "../../components/ui/Container";
import { useGetDonationsQuery } from "../../redux/feature/donationApi";

const Leaderboard = () => {
  const { data } = useGetDonationsQuery("");
  return (
    <div className=" min-h-[90vh] h-[100%] pb-20">
      <Container>
        <div>
          <div className="pt-1 md:pt-6 xl:pt-12">
            <HeadingText
              title="Our Honors Leaderboard"
              body="Discover the names of our top donors and their impactful contributions on our Honors Leaderboard. Join us in recognizing their generosity and commitment to supporting relief efforts."
            />
          </div>
          <div className="flex flex-wrap justify-center items-start  gap-6">
            {data &&
              data
                .slice()
                .reverse()
                .map((donationPost: any, index: number) => (
                  <div className="border bg-white border-black/20 p-5 w-full md:w-1/2 lg:w-1/2 rounded-2xl flex justify-start items-center gap-5 flex-wrap">
                    <div>
                      <h4 className="text-black text-xl lg:text-3xl font-semibold">
                        #{index + 1}
                      </h4>
                    </div>
                    <div>
                      <img
                        src={donationPost.data.image}
                        className="w-24 md:w-44 lg:w-44 object-cover h-24 md:h-44 lg:h-44 rounded-xl"
                      />
                    </div>

                    <div>
                      <div>
                        <p className="text-xl text-left text-black font-semibold ">
                          {donationPost.data.title}
                        </p>
                      </div>
                      <div>
                        <p className="text-base text-left text-black font-semibold ">
                          Donor's Email :-{" "}
                          <span className="text-black">
                            {donationPost.userEmail}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xl text-left text-green-700 font-semibold ">
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
