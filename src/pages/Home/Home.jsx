import Heading from "../../components/shared/TextStyles/Heading";
import AdvertisedProperties from "./AdvertisedProperties";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heading
                title={"Discover Our Featured Listings"}
                subtitle={"These are the best deals handpicked by our experts"}>
            </Heading>
            <AdvertisedProperties></AdvertisedProperties>
        </div>
    );
};

export default Home;