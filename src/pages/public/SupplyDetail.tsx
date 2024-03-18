import { useParams } from "react-router-dom";
import { useGetSupplyByIdQuery } from "../../redux/feature/suppliesApi";

import Container from "../../components/ui/Container";
import { useState } from "react";
import DonationModal from "../../components/ui/DonationModal";
import { userCurrentEmail } from "../../redux/feature/authSlice";
import { useAppSelector } from "../../redux/hook";

const SupplyDetail = () => {
  const id = useParams().id; // Getting Product Params by ID
  const { data } = useGetSupplyByIdQuery(id);
  const [showModal, setShowModal] = useState(false);
  const userEmail = useAppSelector(userCurrentEmail);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <>
        {showModal && (
          <DonationModal
            userEmail={userEmail}
            data={data}
            onClose={handleCloseModal}
          />
        )}
      </>
      <Container>
        {data && (
          <div className="py-10">
            <div>
              <img
                src={data.image}
                className="h-[34rem] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="py-6">
              <p className="text-black text-left text-3xl font-semibold py-1">
                {data.title}
              </p>
              <p className="text-[#a80000] text-left text-lg font-medium pb-1">
                Category - {data.category}
              </p>
              <p className="text-black text-left text-lg font-medium pb-1">
                Description:- {data.description}
              </p>
              <p className="text-[#741010] text-center text-2xl font-semibold pb-1">
                {data.amount} $
              </p>
            </div>
            <p className=" text-red-700 py-2">
              ( you must login before donating )
            </p>
            <button
              onClick={() => handleShowModal()}
              className=" text-3xl w-full rounded-sm border-none hover:bg-white bg-[#731010] hover:text-[#731010] border-white text-white  py-6 transition_custom"
            >
              Donate Now
            </button>
          </div>
        )}
      </Container>
    </>
  );
};

export default SupplyDetail;
