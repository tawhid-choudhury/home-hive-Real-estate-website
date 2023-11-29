import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useParams } from "react-router-dom";
import useGetPropertyById from "../../../hooks/useGetPropertyById";
import { Alert, TextField, Grid, Container, Box, Typography, Button } from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from 'dayjs';
import { useMutation } from "@tanstack/react-query";
import { saveToBoughtDB } from "../../../api/customerDashboardAPI";
import Swal from "sweetalert2";



const MakeOffer = () => {
    const [date, setDate] = useState(null)
    const [amount, setAmount] = useState()
    const [err, setErr] = useState("")
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const { isPending, error, data } = useGetPropertyById(id);


    const { mutate: handleAddToBought } = useMutation({
        mutationFn: (e) => {
            e.preventDefault();
            const propertyId = data.propertyId;
            const propertyLocation = data.propertyLocation;
            const propertyTitle = data.propertyTitle;
            const propertyImage = data.propertyImage;
            const agentName = data.agentName;
            const offeredAmount = parseInt(amount);
            if (offeredAmount < data.priceMin) {
                console.log(offeredAmount);
                setErr("Offered amount too low")
                return;
            }
            if (offeredAmount > data.priceMax) {
                console.log(offeredAmount);
                setErr("Offered amount exceeds max range")
                return;
            }
            setErr("")
            const status = "pending";
            const buyerEmail = user.email;
            const buyerName = user.displayName;
            const newBought = { date, propertyId, propertyLocation, propertyTitle, propertyImage, agentName, offeredAmount, status, buyerEmail, buyerName }
            saveToBoughtDB(newBought)
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

    return (
        <div>
            <form onSubmit={handleAddToBought}>
                <Container maxWidth="lg">
                    <Box sx={{ p: 2, mb: 4, borderRadius: 2 }}>
                        <Box>
                            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray" >
                                Make an Offer:
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    <TextField readOnly value={data?.propertyTitle} label="Property Title" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField readOnly value={data?.propertyLocation} label="Property Location" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField readOnly value={data?.agentName} label="Agent Name" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField readOnly value={user?.displayName} label="Your Name" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField readOnly value={user?.email} label="Your Email" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField error={err} onChange={(e) => {
                                        // console.log(e.target.value);
                                        setAmount(e.target.value)
                                    }} type="number" label="Enter Amount" variant="outlined" fullWidth />
                                    <Alert sx={{ border: 0, p: 0 }} variant="outlined" severity="info">Enter amount between ${data?.priceMin}-${data?.priceMax}</Alert>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <DatePicker
                                        label="Pick a date"
                                        value={date}
                                        onChange={(newValue) => {
                                            // console.log(newValue.toDate().getTime());
                                            setDate(newValue.toDate().getTime())
                                        }}
                                    />
                                    {/* <Alert severity="info">Enter amount between {data?.priceRange}</Alert> */}
                                </Grid>

                            </Grid>
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                    {err && <Alert sx={{ my: 2 }} severity="error">{err}</Alert>}
                    <Button type="submit" variant='contained' color='primary' fullWidth> Submit Offer </Button>
                </Container>
            </form>


        </div >
    );
};

export default MakeOffer;