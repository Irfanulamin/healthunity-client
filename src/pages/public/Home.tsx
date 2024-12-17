import AboutUs from "../../components/section/AboutUs";
import Banner from "../../components/section/Banner";
import Gallery from "../../components/section/Gallery";
import Newsletter from "../../components/section/Newsletter";
import Testimonial from "../../components/section/Testimonial";
import Accordion from "../../components/section/Accordion";
import Container from "../../components/ui/Container";
import SupplypostSection from "../../components/section/SupplypostSection";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Container>
        <SupplypostSection></SupplypostSection>
        <Testimonial></Testimonial>
        <Gallery></Gallery>
      </Container>
      <AboutUs></AboutUs>
      <Accordion></Accordion>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
