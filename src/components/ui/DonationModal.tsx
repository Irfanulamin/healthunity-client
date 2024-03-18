import { NavLink } from "react-router-dom";
import { TFetchData } from "../../utils/Type";
import React from "react";

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
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md  rounded-2xl overflow-hidden">
          <div className="p-5 lg:p-11">
            <div>
              <div>
                <h2 className="text-2xl lg:text-5xl font-semibold  text-[#a80000]">
                  Confirm Your Donation!
                </h2>
              </div>
              <div className="py-2">
                <div>
                  <img src={data.image} className="w-full h-36 object-cover" />
                </div>
                <div>
                  <p className="text-black font-semibold ">. {data.title}</p>
                  <p className="text-black font-semibold ">. {data.category}</p>
                  <p className="text-red-500 text-center font-semibold ">
                    {" "}
                    {data.amount}
                  </p>
                  {userEmail ? (
                    <p className="text-green-500 font-semibold">
                      <span className="text-black">Your Email :-</span>{" "}
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
                  <div className="bg-red-500 border rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-sm">
                    <NavLink to="/dashboard">Confirm!</NavLink>
                  </div>
                </div>
                <div className="w-1/2">
                  <a
                    onClick={onClose}
                    className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                    href="#"
                  >
                    Close The Modal
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
