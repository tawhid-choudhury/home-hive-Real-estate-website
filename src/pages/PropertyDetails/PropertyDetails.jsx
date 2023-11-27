// import { useLoaderData } from "react-router-dom";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { red } from '@mui/material/colors';
import { useLoaderData } from "react-router-dom";
import Heading from "../../components/shared/TextStyles/Heading";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField, Typography } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { saveReviewtoDB } from '../../api/propertyDetailAPI';
import Swal from 'sweetalert2';


const PropertyDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();

    const [open, setOpen] = useState(false);
    const [reviewDescription, setReviewDescription] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddReview = async () => {
        const reviewerName = user.displayName;
        const reviewerImage = user.photoURL;
        const propertyTitle = data.propertyTitle;
        const propertyId = data._id;
        const newReview = { reviewerName, reviewerImage, reviewDescription, propertyTitle, propertyId, }
        // console.log(newReview);
        try {
            const response = saveReviewtoDB(newReview)
            console.log(response);
            Swal.fire({
                title: "Success!",
                text: "Review Added",
                icon: "success"
            });
        } catch (err) {
            console.error(err);
            Swal.fire({
                title: "Failed!",
                text: "Something went wrong",
                icon: "error"
            });
        } finally {
            handleClose();
        }


    }

    return (
        <div className="mt-12">
            <Heading title={data.propertyTitle} subtitle={data.propertyLocation}></Heading>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Card elevation={0} sx={{ maxWidth: "100%" }}>
                            <Box sx={{ position: "relative" }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={data.propertyImage}
                                    alt="Paella dish"
                                />
                                {data.verificationStatus === 'Verified' &&
                                    <span className='rounded-full px-4 py-2'
                                        style={{ position: "absolute", top: "5px", right: "5px", color: 'white', backgroundColor: 'green', fontSize: 'large', display: "flex", alignItems: 'center' }}>
                                        <TaskAltOutlinedIcon fontSize='small' />
                                        verified
                                    </span>}
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{}}>
                        <Card elevation={3} sx={{ minWidth: 275, bgcolor: "white", color: 'white' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="gray" gutterBottom>
                                    Details of
                                </Typography>
                                <Typography color='secondary' variant="h5" component="div">
                                    {data.propertyTitle}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="gray">
                                    <span className='flex items-center  gap-2'><PlaceOutlinedIcon /> {data.propertyLocation}</span>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {data.description}
                                </Typography>

                                <Divider sx={{ mb: 1.5 }} />
                                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: 2 }}>


                                    <Avatar
                                        sx={{ bgcolor: red[500], width: 56, height: 56 }}

                                        src={data.agentImage}
                                    />


                                    <Box>
                                        <Typography sx={{}} color="gray">
                                            Added by
                                        </Typography>
                                        <Typography sx={{}} color="text.secondary">
                                            {data.agentName}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                    <span className='font-bold'>Price Range:</span>  {data.priceRange}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium" startIcon={<FavoriteIcon />} variant='contained' fullWidth> Add to wishlist</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Typography sx={{ pt: 8, fontWeight: 300 }} variant="h3">
                    Reviews:
                </Typography>
                {/* box for reviews */}
                <Box>

                </Box>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add a review
                </Button>
                <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth >
                    <DialogTitle>{data.propertyTitle}</DialogTitle>
                    <DialogContent>
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: 2 }}>


                            <Avatar
                                sx={{ bgcolor: red[500], width: 48, height: 48 }}
                                src={user?.photoURL}
                            />


                            <Box>
                                <Typography variant='small' sx={{}} color="gray">
                                    adding review as <br />
                                </Typography>
                                <Typography sx={{}} color="black">
                                    {user?.displayName}
                                </Typography>
                            </Box>
                        </Box>

                        <TextField
                            onChange={(e) => setReviewDescription(e.target.value)}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Write your Review here"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant='contained' onClick={handleAddReview}>Add Review</Button>
                    </DialogActions>
                </Dialog>

            </Container>
        </div >
    );
};

export default PropertyDetails;