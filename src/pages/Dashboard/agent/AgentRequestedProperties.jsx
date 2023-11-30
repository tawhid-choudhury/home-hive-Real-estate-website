import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useGetAgentBoughtlistRequests from "../../../hooks/useGetAgentBoughtlistRequests";
import RequestCard from "./RequestCard";

const AgentRequestedProperties = () => {
    const { user } = useContext(AuthContext)
    const { isPending, error, data, refetch } = useGetAgentBoughtlistRequests(user.email);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray">
                Requests
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
                            <TableCell>Offered Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map(item => (
                            <RequestCard key={item._id} item={item} refetch={refetch}></RequestCard>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default AgentRequestedProperties;
