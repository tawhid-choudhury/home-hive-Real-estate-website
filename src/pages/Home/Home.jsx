import Heading from "../../components/shared/TextStyles/Heading";
import AdvertisedProperties from "./AdvertisedProperties";
import Banner from "./Banner";
import Faq from "./Faq";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Heading title={"Discover Our Featured Listings"} subtitle={"These are the best deals handpicked by our experts"} />
            <AdvertisedProperties />
            <Heading title={"Lastest Reviews"} subtitle={"Discover What Our Clients Say: Real Stories, Real Satisfaction."} />
            <Testimonials />
            <Newsletter />
            <Faq />
        </div >
    );
};

export default Home;