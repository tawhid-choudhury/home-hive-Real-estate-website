import useGetWishList from "../../../hooks/useGetWishlist"
import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { AuthContext } from '../../../providers/AuthProvider';
import WishlistCard from "./WishlistCard";

const CustomerWishlist = () => {
    const { user } = useContext(AuthContext)
    const { isPending, error, data, refetch } = useGetWishList(user.email);
    console.log(data);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray" >
                Wishlist
            </Typography>
            {!data?.length ?
                <Typography sx={{ pt: 4, fontWeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }} variant="h4">
                    {isPending ? <>loading... </> : <>No data</>}
                </Typography>
                :

                <Box>
                    {data?.map(item => <WishlistCard key={item._id} item={item} refetch={refetch}></WishlistCard>)}
                </Box>
            }
        </div>
    );
};

export default CustomerWishlist;