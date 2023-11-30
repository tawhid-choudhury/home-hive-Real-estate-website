import { useEffect, useState } from "react";
import { getVerified } from "../../api/allpropertiesAPI";
import { Container, Grid, Button } from "@mui/material";
import Heading from "../../components/shared/TextStyles/Heading";
import AllCard from "./AllCard";

const Allproperties = () => {
    const [properties, setProperties] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        getVerified().then((data) => setProperties(data));
    }, []);

    const handleSort = () => {
        const newOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newOrder);

        const sortedProperties = [...properties].sort((a, b) => {
            const priceA = parseInt(a.priceMax);
            const priceB = parseInt(b.priceMax);

            return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
        });

        setProperties(sortedProperties);
    };

    return (
        <div className="mt-11">
            <Heading title={"All Properties"} subtitle={"Showing all verified properties"} />

            <Container maxWidth="xl">
                <Button onClick={handleSort} variant="outlined" color="primary">
                    Sort by Price {sortOrder === "asc" ? "Low to High" : "High to Low"}
                </Button>

                <Grid container spacing={2}>
                    {properties.map((property) => (
                        <Grid key={property._id} item xs={12} md={6} lg={4} xl={4}>
                            <AllCard property={property} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Allproperties;
