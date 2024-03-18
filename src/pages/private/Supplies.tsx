import {
  useDeleteSupplyMutation,
  useGetSuppliesQuery,
} from "../../redux/feature/suppliesApi";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import { TFetchData } from "../../utils/Type";

const Supplies = () => {
  const { data } = useGetSuppliesQuery("");
  const [mutate] = useDeleteSupplyMutation();

  const [showModal, setShowModal] = useState(false);
  const [selectedSupply, setSelectedSupply] = useState<TFetchData | null>(null);

  const handleShowModal = (selectedID: string) => {
    const selectedSupplyDetails = data.find(
      (supply: TFetchData) => supply._id === selectedID
    );
    setSelectedSupply(selectedSupplyDetails);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        mutate(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      {showModal && (
        <Modal onClose={handleCloseModal} supply={selectedSupply} />
      )}

      <div className="flex flex-col gap-5">
        {data &&
          data.map((supply: any, index: number) => (
            <div
              key={index}
              className="flex flex-wrap gap-4 justify-start items-center p-6 lg:p-12 border border-black rounded"
            >
              <div>
                <img
                  src={supply.image}
                  className="w-24 md:w-44 lg:w-44 object-cover h-24 md:h-44 lg:h-44"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-xs md:text-xl lg:text-xl text-left  text-green-500">
                  {supply.title}
                </p>
                <p className="font-semibold text-xs md:text-xl lg:text-xl text-left text-red-500">
                  {supply.category}
                </p>
                <p className="font-semibold text-xs text-left text-slate-500">
                  {supply.description}
                </p>
                <p className="font-semibold text-xs md:text-xl lg:text-xl text-left text-red-600">
                  {supply.amount}$
                </p>
                <div className="flex flex-wrap justify-start items-center gap-2">
                  <button
                    onClick={() => handleShowModal(supply._id)}
                    className="bg-yellow-500 hover:bg-transparent hover:text-yellow-500 transition_custom py-1 px-2 rounded text-black font-semibold text-lg "
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(supply._id)}
                    className="bg-red-500 hover:bg-transparent hover:text-red-500 transition_custom py-1 px-2 rounded text-black font-semibold text-lg "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Supplies;
