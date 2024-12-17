import { useGetSuppliesQuery } from "@/redux/feature/suppliesApi";
import { TFetchData } from "@/utils/Type";
import SupplyCard from "../ui/SupplyCard";

const AllSuppliesSection = () => {
  const { data } = useGetSuppliesQuery("");
  return (
    <div className="flex flex-wrap place-content-center gap-6 md:gap-12 lg:gap-24">
      {data && data.map((supply: TFetchData) => <SupplyCard supply={supply} />)}
    </div>
  );
};

export default AllSuppliesSection;
