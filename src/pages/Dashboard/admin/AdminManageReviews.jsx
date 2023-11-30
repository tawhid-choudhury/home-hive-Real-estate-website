import { Box, Typography } from '@mui/material';
import useGetAllReviews from "../../../hooks/useGetAllReviews";
import AdminReviewCard from './AdminReviewCard';


const AdminManageReviews = () => {
    const { isPending, error, data, refetch } = useGetAllReviews();
    console.log(data);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray" >
                My Reviews
            </Typography>
            {!data?.length ?
                <Typography sx={{ pt: 4, fontWeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }} variant="h4">
                    {data ? <>loading... </> : <>No reviews</>}
                </Typography>
                :

                <Box>
                    {data?.map(review => <AdminReviewCard key={review._id} review={review} reviewRefetch={refetch}></AdminReviewCard>)}
                </Box>
            }

        </div>
    );
};

export default AdminManageReviews;
