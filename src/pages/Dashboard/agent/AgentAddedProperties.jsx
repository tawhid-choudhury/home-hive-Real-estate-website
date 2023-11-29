import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Box, Typography } from "@mui/material";

import useGetPropertiesFromAgent from "../../../hooks/useGetPropertiesFromAgent";
import WishlistCard from "../customer/WishlistCard";
import AgentPropertiesCard from "./AgentPropertiesCard";



const AgentAddedProperties = () => {
    const { user } = useContext(AuthContext)
    const { isPending, error, data, refetch } = useGetPropertiesFromAgent(user.email);
    console.log(data);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray" >
                My Added Properties
            </Typography>
            {!data?.length ?
                <Typography sx={{ pt: 4, fontWeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }} variant="h4">
                    {isPending ? <>loading... </> : <>No data</>}
                </Typography>
                :

                <Box>
                    {data?.map(item => <AgentPropertiesCard key={item._id} item={item} refetch={refetch}></AgentPropertiesCard>)}
                </Box>
            }

        </div>
    );
};

export default AgentAddedProperties;