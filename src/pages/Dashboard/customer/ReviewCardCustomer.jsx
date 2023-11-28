import { Avatar, Box, Typography, Button } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { deleteReview } from '../../../api/customerDashboardAPI';
import Swal from 'sweetalert2';
// import { getTimeAgo } from '../../../api/utils';

const ReviewCardCustomer = ({ review, reviewRefetch }) => {

    const getTime = (timestamp) => {
        const date = new Date(timestamp);
        const localTime = date.toLocaleString();
        console.log(localTime);
        return localTime;
    }

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
                    deleteReview(review._id)
                        .then(
                            res => {
                                console.log(res);
                                reviewRefetch();
                                if (res.acknowledged) {
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    })
                                } else {
                                    Swal.fire({
                                        title: "Error!",
                                        text: "Could not delete deleted.",
                                        icon: "error"
                                    })
                                }
                            })
                }
            });
            deleteReview(review._id)
        }
    })


    return (
        <div>
            <Typography variant='subtitle2' color="gray" >
                Review written for: <span style={{ color: "black", fontSize: '18px' }}>{review?.propertyTitle}</span>
            </Typography>
            <Box sx={{ p: 2, border: 1, mb: 4, borderRadius: 2, borderColor: "gray", display: 'flex', alignItems: 'center', justifyContent: "space-between", gap: 2, }}>
                <Box>
                    <Typography variant='subtitle2' color="gray" >
                        Description:
                    </Typography>

                    <Typography variant='subtitle1'>
                        {review?.reviewDescription}
                    </Typography>

                    <Typography sx={{ mt: 4 }} variant='body2'>
                        Agent name: {review?.agentName}
                    </Typography>

                    <Typography sx={{ mt: 4 }} variant='body2'>
                        Posted on: {getTime(review?.timestamp)}
                    </Typography>
                </Box>
                <Button onClick={mutate} variant='contained' color='primary' > Delete</Button>
            </Box>
        </div >
    );
};

ReviewCardCustomer.propTypes = {
    review: PropTypes.object,
};

export default ReviewCardCustomer;