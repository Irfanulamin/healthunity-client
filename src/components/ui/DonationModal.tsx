import { useNavigate } from "react-router-dom";
import { useCreateDonationsMutation } from "../../redux/feature/donationApi";
import { TFetchData } from "../../utils/Type";
import React from "react";
import { useAppSelector } from "../../redux/hook";

type DonationModalProps = {
  userEmail: string;
  data: TFetchData;
  onClose: () => void;
};

const DonationModal: React.FC<DonationModalProps> = ({
  userEmail,
  data,
  onClose,
}) => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const [createDonation] = useCreateDonationsMutation();
  const navigate = useNavigate();
  const handleDonation = () => {
    const donationData = {
      data: data,
      userEmail,
    };
    createDonation(donationData);
    navigate("/dashboard");
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[360px] sm:max-w-[300px] md:max-w-[500px]  lg:max-w-[650px] p-4 max-h-[90vh] overflow-auto">
        <div
          className={`${
            darkMode ? "bg-black" : "bg-white"
          } shadow-md  rounded-2xl overflow-hidden`}
        >
          <div className="p-5 lg:p-11">
            <div>
              <div>
                <h2 className="text-lg lg:text-3xl font-semibold text-center text-[#a80000]">
                  Confirm Your Donation!
                </h2>
              </div>
              <div className="py-2 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2">
                <div>
                  <img
                    src={data.image}
                    className="w-44 h-44 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <p
                    className={`${
                      darkMode ? "text-white" : "text-black"
                    } font-semibold `}
                  >
                    {data.title}
                  </p>
                  <p
                    className={`${
                      darkMode ? "text-white" : "text-black"
                    } font-semibold `}
                  >
                    {data.category}
                  </p>
                  <p className="text-red-500 text-left font-semibold ">
                    {data.amount}
                  </p>
                  {userEmail ? (
                    <p className="text-green-500 font-semibold">
                      <span
                        className={`${darkMode ? "text-white" : "text-black"}`}
                      >
                        Your Email :-
                      </span>{" "}
                      {userEmail}
                    </p>
                  ) : (
                    <p className="text-red-500 py-1">
                      ( login before donating ! )
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-2">
                <div className=" w-1/2">
                  <div
                    onClick={() => handleDonation()}
                    className="bg-red-500 border rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-sm"
                  >
                    Confirm!
                  </div>
                </div>
                <div className="w-1/2">
                  <a
                    onClick={onClose}
                    className={`${
                      darkMode
                        ? "border-white text-white"
                        : "border-black text-black"
                    } border  rounded-lg py-2 px-5 flex items-center justify-center gap-2  font-semibold text-sm`}
                    href="#"
                  >
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
