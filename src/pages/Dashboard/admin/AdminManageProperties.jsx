import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useGetAllProperties from "../../../hooks/useGetAllProperties";
import AllPropertiesTableRow from "./AllPropertiesTableRow";



const AdminManageProperties = () => {
    // const { user } = useContext(AuthContext)
    const { isPending, error, data, refetch } = useGetAllProperties();

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>

            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray">
                Manage Properties
            </Typography>

            <TableContainer component={Paper} sx={{ width: "80vw", overflowX: 'auto' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Property title</TableCell>
                            <TableCell>Property Location</TableCell>
                            <TableCell>Agent Name</TableCell>
                            <TableCell>Agent Email</TableCell>
                            <TableCell>Price Range</TableCell>
                            <TableCell>Advertise Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map(item => (
                            <AllPropertiesTableRow key={item._id} item={item} refetch={refetch}></AllPropertiesTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AdminManageProperties;