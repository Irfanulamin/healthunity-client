import { Card, CardContent } from "./card";
import { Badge } from "./badge";

const SupplyCard = ({ supply }: any) => {
  return (
    <Card className="w-96 border border-black/15">
      <div className="relative overflow-hidden group rounded-t-xl">
        <img
          src={supply.image}
          alt={supply.title}
          className="w-96 h-96 object-cover rounded-t-xl transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">
          {supply.category}
        </Badge>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xl font-semibold p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            {supply.title}
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between ">
          <span className="text-2xl font-bold text-red-800">
            {supply.amount}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-1 mb-1">
          {supply.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {supply.description}
        </p>
        <div className="flex justify-start items-center w-full mt-4">
          <a
            href={`/supplies/${supply._id}`}
            className="px-12 py-3 rounded-xl bg-red-800 hover:bg-red-900 text-white text-xl"
          >
            Add to Cart
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplyCard;
