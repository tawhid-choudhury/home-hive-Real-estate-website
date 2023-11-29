import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useGetBoughtlist from "../../../hooks/useGetBoughtlist"
import { Box, Typography } from "@mui/material";
import BoughtlistCard from "./BoughtlistCard";


const CustomerBoughtlist = () => {
    const { user } = useContext(AuthContext)
    const { isPending, error, data, refetch } = useGetBoughtlist(user.email);
    console.log(data);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            {!data?.length ?
                <Typography sx={{ pt: 4, fontWeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }} variant="h4">
                    {isPending ? <>loading... </> : <>No data</>}
                </Typography>
                :

                <Box>
                    {data?.map(item => <BoughtlistCard key={item._id} item={item} refetch={refetch}></BoughtlistCard>)}
                </Box>
            }

        </div>
    );
};

export default CustomerBoughtlist;