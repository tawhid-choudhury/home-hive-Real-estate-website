import { useEffect, useState } from "react";
import { getVerified } from "../../api/allpropertiesAPI";
import { Container, Grid } from "@mui/material";
import Heading from "../../components/shared/TextStyles/Heading";
import AllCard from "./AllCard";



const Allproperties = () => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        getVerified()
            .then(data => setProperties(data))
    }, [])
    console.log(properties);
    return (
        <div className="mt-11">
            <Heading title={"All Properties"} subtitle={"Showing all verified properties"} />
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {properties.map((property) =>


                        <Grid key={property._id} item xs={12} md={6} lg={4} xl={4}>
                            <AllCard property={property} />
                        </Grid>

                    )}

                </Grid>
            </Container>
        </div>
    );
};

export default Allproperties;