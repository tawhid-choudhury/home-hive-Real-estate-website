import Heading from "../../components/shared/TextStyles/Heading";
import AdvertisedProperties from "./AdvertisedProperties";
import Banner from "./Banner";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Heading title={"Discover Our Featured Listings"} subtitle={"These are the best deals handpicked by our experts"} />
            <AdvertisedProperties />
            <Heading title={"Testimonials"} subtitle={"Discover What Our Clients Say: Real Stories, Real Satisfaction."} />
            <Testimonials />
        </div >
    );
};

export default Home;