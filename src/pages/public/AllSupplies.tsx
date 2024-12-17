import Container from "../../components/ui/Container";
import HeadingText from "@/components/ui/HeadingText";
import AllSuppliesSection from "@/components/section/AllSuppliesSection";

const AllSupplies = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="">
          <HeadingText
            title="Our Currently All Supplies!"
            body="Your donation brings hope to those in disaster's grip, offering a lifeline of support. Be the light in their darkest hours, making a tangible impact withyour generosity."
          />
        </div>
        <AllSuppliesSection />
      </div>
    </Container>
  );
};

export default AllSupplies;
