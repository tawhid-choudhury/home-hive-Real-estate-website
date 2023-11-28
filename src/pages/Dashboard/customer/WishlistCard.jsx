
import PropTypes from 'prop-types';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { getTime } from '../../../api/utils';
import { useMutation } from '@tanstack/react-query';
import { deleteWishlist } from '../../../api/customerDashboardAPI';
import Swal from 'sweetalert2';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { Link } from 'react-router-dom';



const WishlistCard = ({ item, refetch }) => {

    const { mutate } = useMutation({
        mutationFn: () => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteWishlist(item._id)
                        .then(
                            res => {
                                console.log(res);
                                refetch();
                                if (res.acknowledged) {
                                    Swal.fire({
                                        title: "Removed!",
                                        text: "Your file has been Removed.",
                                        icon: "success"
                                    })
                                } else {
                                    Swal.fire({
                                        title: "Error!",
                                        text: "Could not remove file.",
                                        icon: "error"
                                    })
                                }
                            })
                }
            });
        }
    })

    return (
        <div>
            <Box sx={{ p: 2, border: 1, mb: 4, borderRadius: 2, borderColor: "gray", display: 'flex', alignItems: 'center', justifyContent: "space-between", gap: 2, }}>
                <Box sx={{ position: "relative", overflow: "hidden", width: "480px", height: "300px", bgcolor: "blanchedalmond" }}>
                    <img src={item?.propertyImage} alt="" />
                    {item?.verificationStatus === 'Verified' &&
                        <span className=''
                            style={{ position: "absolute", top: "5px", right: "5px", color: 'white', backgroundColor: 'green', fontSize: 'large', padding: "2px 8px", borderRadius: "20px", display: "flex", alignItems: 'center' }}>
                            <TaskAltOutlinedIcon fontSize='small' />
                            verified
                        </span>}
                </Box>

                <Box>
                    <Typography variant='subtitle2' color="gray" >
                        <span style={{ color: "black", fontSize: '18px' }}>{item?.propertyTitle}</span>
                    </Typography>

                    <Typography variant='subtitle1'>
                        location: {item?.propertyLocation}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: 2 }}>


                        <Avatar
                            sx={{ bgcolor: "blue", width: 56, height: 56 }}
                            src={item?.agentImage}
                        />


                        <Box>
                            <Typography sx={{}} color="gray">
                                Added by
                            </Typography>
                            <Typography sx={{}} color="text.secondary">
                                {item?.agentName}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant='subtitle1'>
                        PriceRange: {item?.priceRange}
                    </Typography>

                    <Typography sx={{ mt: 4 }} variant='body2'>
                        Posted on: {getTime(item?.timestamp)}
                    </Typography>
                </Box>
                <Box>
                    <Link to={`/dashboard/makeoffer/${item.propertyId}`}><Button sx={{ my: 2 }} variant='contained' color='primary' > Make Offer </Button></Link>
                    <br />
                    <Button sx={{ my: 2, bgcolor: 'firebrick' }} onClick={mutate} variant='contained' color='primary' fullWidth> Remove</Button>
                </Box>
            </Box>

        </div>
    );
};

WishlistCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func
};

export default WishlistCard;