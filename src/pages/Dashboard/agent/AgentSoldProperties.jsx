import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useGetAgentBoughtlistRequests from "../../../hooks/useGetAgentBoughtlistRequests";
import RequestCard from "./RequestCard";
import SoldCard from "./SoldCard";
import useGetAgentSold from "../../../hooks/useGetAgentSold";

const AgentSoldProperties = () => {
    const { user } = useContext(AuthContext)
    const { isPending, error, data, refetch } = useGetAgentSold(user.email);

    const totalSold = data.reduce((total, item) => total + item.offeredAmount, 0)

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray">
                Sold Properties
            </Typography>



            <TableContainer component={Paper} sx={{ width: "80vw", overflowX: 'auto' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Property ID</TableCell>
                            <TableCell>Property title</TableCell>
                            <TableCell>Property Location</TableCell>
                            <TableCell>Buyer Email</TableCell>
                            <TableCell>Buyer Name</TableCell>
                            <TableCell>Sold Price</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map(item => (
                            <SoldCard key={item._id} item={item} refetch={refetch}></SoldCard>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography sx={{ my: 4, fontWeight: 600 }} variant='h6' color="gray">
                Total Sold: {totalSold}
            </Typography>

        </div>
    );
};

export default AgentSoldProperties;





