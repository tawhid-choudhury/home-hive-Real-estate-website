import { useContext } from "react";
import useGetReviewFromUser from "../../../hooks/useGetReviewFromUser";
import { AuthContext } from "../../../providers/AuthProvider";
import { Box, Typography } from '@mui/material';
import ReviewCardCustomer from "./ReviewCardCustomer";


const CustomerReviews = () => {
    const { user } = useContext(AuthContext);
    const { reviewpending, reviewerror, reviews, reviewRefetch } = useGetReviewFromUser(user.email);
    console.log(reviews);

    if (reviewpending) return 'Loading...'

    if (reviewerror) return 'An error has occurred: ' + reviewerror.message
    return (
        <div>
            {!reviews?.length ?
                <Typography sx={{ pt: 4, fontWeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }} variant="h4">
                    {reviewpending ? <>loading... </> : <>No reviews</>}
                </Typography>
                :

                <Box>
                    {reviews?.map(review => <ReviewCardCustomer key={review._id} review={review} reviewRefetch={reviewRefetch}></ReviewCardCustomer>)}
                </Box>
            }

        </div>
    );
};

export default CustomerReviews;