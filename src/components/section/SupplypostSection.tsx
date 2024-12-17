import { useGetSuppliesQuery } from "../../redux/feature/suppliesApi";
import { NavLink } from "react-router-dom";
import { TFetchData } from "../../utils/Type";
import SupplyCard from "../ui/SupplyCard";
import HeadingText from "../ui/HeadingText";

const SupplypostSection = () => {
  const { data } = useGetSuppliesQuery("");

  return (
    <div className="py-20">
      <HeadingText
        title="Our Supplies!"
        body="Your donation brings hope to those in disaster's grip, offering a lifeline of support. Be the light in their darkest hours, making a tangible impact with your
        generosity."
      />
      <div className="flex flex-wrap place-content-center gap-6 md:gap-12 lg:gap-24">
        {data &&
          data
            .slice(0, 6)
            .map((supply: TFetchData) => <SupplyCard supply={supply} />)}
      </div>
      {data && (
        <div className="py-12 flex justify-center items-center">
          <NavLink to="supplies">
            <button className=" rounded-xl  border-none hover:bg-black/10 bg-black hover:text-black font-semibold  text-white  py-4 px-7 transition_custom">
              View All Supplies
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SupplypostSection;
