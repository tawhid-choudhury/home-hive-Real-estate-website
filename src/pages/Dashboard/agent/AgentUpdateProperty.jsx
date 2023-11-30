import { Box, Button, Container, Grid, TextField, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Swal from "sweetalert2";
import { imageUpload } from "../../../api/utils";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useGetPropertyById from "../../../hooks/useGetPropertyById";
import axiosSecure from "../../../api";


const AgentUpdateProperty = () => {
    const { id } = useParams();

    const { isPending, error, data, refetch } = useGetPropertyById(id);
    // console.log(data);
    const { user } = useContext(AuthContext)
    const [propertyImage, setpropertyImage] = useState(null);
    const [propertyTitle, setPropertyTitle] = useState('');
    const [propertyLocation, setPropertyLocation] = useState('');
    const [description, setDescription] = useState('');
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        if (data) {
            setPropertyTitle(data.propertyTitle || '');
            setPropertyLocation(data.propertyLocation || '');
            setDescription(data.description || '');
            setPriceMin(data.priceMin || 0);
            setPriceMax(data.priceMax || 0);

            // Set the default value for propertyImage and imagePreview
            if (data.propertyImage) {
                setpropertyImage(data.propertyImage); // Clear the previous value
                setImagePreview(data.propertyImage);
            }
        }
    }, [data]);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleImageChange = (e) => {
        setpropertyImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    }

    const { mutateAsync: handleSubmit } = useMutation({
        mutationFn: async (e) => {
            e.preventDefault();
            if (!propertyImage || !propertyLocation || !propertyTitle || !description || !priceMin || !priceMax) {
                Swal.fire({
                    title: "Failed!",
                    text: "Fillup All Fields",
                    icon: "error"
                });
                return;
            }
            try {
                const verificationStatus = "Pending";
                const featured = "false";
                const priceRange = `$${priceMin}-$${priceMax}`

                const imageData = await imageUpload(propertyImage);

                const updatedProperty = { propertyImage: imageData?.data?.display_url, propertyTitle, propertyLocation, verificationStatus, priceRange, featured, description, priceMin, priceMax }
                // console.log(UpdatedProperty);

                const res = await axiosSecure.patch(`/updateProperty/${id}`, updatedProperty);
                console.log(res);
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: "Property Added",
                    icon: "success"
                });


            } catch (err) {
                console.log(err);
                Swal.fire({
                    title: "Failed!",
                    text: `${err?.message}`,
                    icon: "error"
                });
            }
        }
    })



    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Container maxWidth="lg">
                    <Box sx={{ p: 2, mb: 4, borderRadius: 2 }}>
                        <Box>
                            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray" >
                                Update Property
                            </Typography>
                            <Grid container spacing={2}>

                                <Grid item xs={12} md={12}>

                                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                                        {propertyImage ?
                                            <img style={{ maxHeight: "480px" }} src={imagePreview} alt="" />
                                            : <img style={{ maxHeight: "480px" }} src="https://i.ibb.co/LpqKsT3/Screenshot-2023-11-30-005705.png" alt="" />
                                        }
                                    </Box>


                                </Grid>



                                <Grid item xs={12} md={12}>
                                    <Button sx={{ color: "black", fontWeight: "400", py: 1.5, borderColor: "#00000040" }} component="label" fullWidth variant="outlined" startIcon={<CloudUploadIcon />}>
                                        Upload Image
                                        <VisuallyHiddenInput type="file" onChange={handleImageChange} />
                                    </Button>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField readOnly value={user?.displayName} label="Agent name" variant="outlined" fullWidth />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField readOnly value={user?.email} label="Agent Email" variant="outlined" fullWidth />
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <TextField defaultValue={data?.propertyTitle} onChange={(e) => setPropertyTitle(e.target.value)} label="Property Title" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField defaultValue={data?.propertyLocation} onChange={(e) => setPropertyLocation(e.target.value)} label="Property Location" variant="outlined" fullWidth />
                                </Grid>


                                <Grid item xs={6} md={6}>
                                    <TextField defaultValue={data?.priceMin} onChange={(e) => setPriceMin(parseInt(e.target.value))} label="Minimum Price" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField defaultValue={data?.priceMax} onChange={(e) => setPriceMax(parseInt(e.target.value))} label="Maximum Price" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField defaultValue={data?.description} onChange={(e) => setDescription(e.target.value)} multiline rows={4} label="Property Description" variant="outlined" fullWidth />
                                </Grid>


                            </Grid>
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                    {/* {err && <Alert sx={{ my: 2 }} severity="error">{err}</Alert>} */}
                    <Button type="submit" variant='contained' color='primary' fullWidth> Submit Offer </Button>
                </Container>
            </form>
        </div>
    );
};

export default AgentUpdateProperty;