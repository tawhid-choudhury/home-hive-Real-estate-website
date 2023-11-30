import { useEffect, useState } from "react";
import { getVerified } from "../../api/allpropertiesAPI";
import { Container, Grid, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Heading from "../../components/shared/TextStyles/Heading";
import AllCard from "./AllCard";

const Allproperties = () => {
    const [properties, setProperties] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('priceMin');

    useEffect(() => {
        getVerified()
            .then(data => setProperties(data))
    }, []);

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };

    const sortedProperties = [...properties].sort((a, b) => a[sortCriteria] - b[sortCriteria]);

    return (
        <div className="mt-11">
            <Heading title={"All Properties"} subtitle={"Showing all verified properties"} />

            <Container maxWidth="xl">
                <Grid container spacing={2}>

                    <Grid item xs={12} md={12} lg={12} xl={12}>
                        <FormControl>
                            <InputLabel htmlFor="sort-criteria">Sort by</InputLabel>
                            <Select
                                value={sortCriteria}
                                onChange={handleSortChange}
                                inputProps={{
                                    name: 'sortCriteria',
                                    id: 'sort-criteria',
                                }}
                            >
                                <MenuItem value="priceMin">Price (Min)</MenuItem>
                                <MenuItem value="priceMax">Price (Max)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {sortedProperties.map((property) => (
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
