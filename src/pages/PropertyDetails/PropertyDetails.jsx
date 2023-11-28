// import { useLoaderData } from "react-router-dom";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { red } from '@mui/material/colors';
import { useParams } from "react-router-dom";
import Heading from "../../components/shared/TextStyles/Heading";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField, Typography } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { saveReviewtoDB, saveToWishlistDB } from '../../api/propertyDetailAPI';
import Swal from 'sweetalert2';
import ReviewCard from './ReviewCard';
import useGetPropertyById from '../../hooks/useGetPropertyById';
import useGetReviewsForProperty from '../../hooks/useGetReviewsForProperty';
import { useMutation } from '@tanstack/react-query';


const PropertyDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const [open, setOpen] = useState(false);
    const [reviewDescription, setReviewDescription] = useState("");

    const { isPending, error, data } = useGetPropertyById(id)

    const { reviewpending, reviews, reviewRefetch } = useGetReviewsForProperty(id);


    const handleAddReview = async () => {
        const reviewerName = user.displayName;
        const reviewerEmail = user.email;
        const reviewerImage = user.photoURL;
        const propertyTitle = data.propertyTitle;
        const agentName = data.agentName
        const propertyId = data._id;
        const newReview = { reviewerEmail, reviewerName, reviewerImage, reviewDescription, propertyTitle, propertyId, agentName }
        // console.log(newReview);
        try {
            const response = await saveReviewtoDB(newReview)
            console.log(response);
            Swal.fire({
                title: "Success!",
                text: "Review Added",
                icon: "success"
            });
            if (response) {
                reviewRefetch();
            }
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

    const { mutateAsync } = useMutation({
        mutationFn: handleAddReview
    })

    const { mutate: handleAddWishlist } = useMutation({
        mutationFn: () => {
            const buyerEmail = user.email;
            const { _id, propertyImage, propertyTitle, propertyLocation, agentName, agentImage, priceRange, verificationStatus } = data;
            saveToWishlistDB({ propertyId: _id, propertyImage, propertyTitle, propertyLocation, agentName, agentImage, priceRange, verificationStatus, buyerEmail })
                .then(res => {
                    if (res.insertedId) {
                        Swal.fire({
                            title: "Success!",
                            text: "Review Added",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed",
                            icon: "error"
                        });
                    }
                })
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    return (
        <div className=" mt-10">
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
                                    <span className=''
                                        style={{ position: "absolute", top: "5px", right: "5px", color: 'white', backgroundColor: 'green', fontSize: 'large', padding: "2px 8px", borderRadius: "20px", display: "flex", alignItems: 'center' }}>
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
                                    <span className=''><PlaceOutlinedIcon /> {data.propertyLocation}</span>
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
                                    <span className=''>Price Range:</span>  {data.priceRange}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={handleAddWishlist} size="medium" startIcon={<FavoriteIcon />} variant='contained' fullWidth> Add to wishlist</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Typography sx={{ pt: 8, fontWeight: 300 }} variant="h3">
                    Reviews:{reviews?.length}
                </Typography>
                {/* box for reviews */}
                <Box sx={{ bgcolor: "#727c8220", minHeight: "100px", borderRadius: 2, my: 4 }}>
                    {!reviews?.length ?
                        <Typography sx={{ pt: 4, fontWeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }} variant="h4">
                            {reviewpending ? <>loading... </> : <>No reviews</>}
                        </Typography>
                        :
                        <Box>
                            {reviews?.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)}
                        </Box>
                    }
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
                        <Button variant='contained' onClick={async () => {
                            await mutateAsync()
                        }}>Add Review</Button>
                    </DialogActions>
                </Dialog>

            </Container>
        </div >
    );
};

export default PropertyDetails;