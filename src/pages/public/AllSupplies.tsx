import { Card } from "antd";
import { useGetSuppliesQuery } from "../../redux/feature/suppliesApi";
import Container from "../../components/ui/Container";
import { NavLink } from "react-router-dom";
import { TFetchData } from "../../utils/Type";

const AllSupplies = () => {
  const { data } = useGetSuppliesQuery("");
  return (
    <Container>
      <div className="py-20">
        <div className="mb-12">
          <h2 className=" text-3xl lg:text-5xl font-semibold  text-[#a80000]">
            Our Currently All Supplies!
          </h2>
          <p className="text-black text-xs md:text-lg lg:text-lg py-2 lg:py-4 text-center ">
            "Your donation brings hope to those in
            <span className="text-[#a80000]">
              {" "}
              disaster's grip, offering a lifeline of support.{" "}
            </span>
            Be the light in their darkest hours, making a tangible impact with
            your generosity."
          </p>
        </div>
        <div className="flex flex-wrap place-content-center gap-6 md:gap-12 lg:gap-24">
          {data &&
            data.map((supply: TFetchData) => (
              <Card
                key={supply._id}
                style={{ width: 300, border: "1px solid" }}
              >
                <div>
                  <img
                    src={supply.image}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-black text-left text-xl font-semibold py-1">
                    {supply.title}
                  </p>
                  <p className="text-[#707070] text-left text-sm font-medium pb-1">
                    {supply.category}
                  </p>
                  <p className="text-[#741010] text-center text-lg font-semibold pb-1">
                    {supply.amount} $
                  </p>
                </div>
                <NavLink to={`/supplies/${supply._id}`}>
                  <button className="w-full rounded-sm border-none hover:bg-white bg-[#731010] hover:text-[#731010] border-white text-white  py-3 transition_custom">
                    View Details
                  </button>
                </NavLink>
              </Card>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default AllSupplies;
