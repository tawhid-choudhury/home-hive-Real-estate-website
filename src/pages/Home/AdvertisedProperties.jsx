import HomePageCard from "./HomePageCard";
import { Container, Grid } from "@mui/material";
import useGetFeatured from "../../hooks/useGetFeatured";


const AdvertisedProperties = () => {

    const { featured, featuredpending, featurederror } = useGetFeatured();

    if (featuredpending) return 'Loading...'

    if (featurederror) return 'An error has occurred: ' + featurederror.message

    return (
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={2} >
                    {featured?.map((property, idx) =>

                        <Grid item xs={12} md={6} key={idx}>
                            <HomePageCard property={property} />
                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    );
};

export default AdvertisedProperties;