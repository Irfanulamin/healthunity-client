import { useParams } from "react-router-dom";
import { useGetSupplyByIdQuery } from "../../redux/feature/suppliesApi";

import Container from "../../components/ui/Container";
import { useState } from "react";
import DonationModal from "../../components/ui/DonationModal";
import {
  userCurrentEmail,
  userCurrentToken,
} from "../../redux/feature/authSlice";
import { useAppSelector } from "../../redux/hook";
import AllSuppliesSection from "@/components/section/AllSuppliesSection";
import HeadingText from "@/components/ui/HeadingText";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SupplyDetail = () => {
  const { darkMode } = useAppSelector((store) => store.theme);
  const id = useParams().id; // Getting Product Params by ID
  const { data } = useGetSupplyByIdQuery(id);
  const [showModal, setShowModal] = useState(false);
  const userEmail = useAppSelector(userCurrentEmail);
  const authenticated = useAppSelector(userCurrentToken);

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
          <Card
            className={`w-full max-w-4xl mx-auto overflow-hidden mt-6 md:md-12 xl:mt-24  ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <div className="flex flex-col md:flex-row">
              <div className="">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-80 md:h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                    {data.title}
                  </h2>
                  <p className="text-base font-medium text-red-600 mb-2">
                    Category: {data.category}
                  </p>
                  <p
                    className={`text-base mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {data.description}
                  </p>
                </div>
                {!authenticated && (
                  <p className="text-red-600 text-sm italic mb-4">
                    You must log in before donating.
                  </p>
                )}
                <div className="flex justify-start items-start gap-2">
                  <div>
                    <p className="text-3xl font-bold text-red-700 mb-4">
                      {data.amount}
                    </p>
                  </div>
                  <div>
                    <Button
                      onClick={handleShowModal}
                      className="bg-red-700 hover:bg-red-800 text-white px-8"
                    >
                      Donate Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        )}
        <hr className="my-10 md:my-24 xl:my-44 border border-black/20" />
        <div className="xl:mt-16 mt-2 md:mt-8  mb-16 xl:mb-32">
          <HeadingText
            title="Support a Cause"
            body="Your contribution can make a real difference in someone's life. Explore our donation items and help us bring hope to those in need."
          />

          <AllSuppliesSection />
        </div>
      </Container>
    </>
  );
};

export default SupplyDetail;
