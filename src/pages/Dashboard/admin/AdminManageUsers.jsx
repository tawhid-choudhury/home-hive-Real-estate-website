import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useGetAllProperties from "../../../hooks/useGetAllProperties";
import AllPropertiesTableRow from "./AllPropertiesTableRow";
import useGetAllUsers from "../../../hooks/useGetAllUsers";
import AllUsersCard from "./AllUsersCard";



const AdminManageUsers = () => {
    // const { user } = useContext(AuthContext)
    const { isPending, error, data, refetch } = useGetAllUsers();

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>

            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h4' color="gray">
                Manage Users
            </Typography>

            <TableContainer component={Paper} sx={{ width: "80vw", overflowX: 'auto' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User Email</TableCell>
                            <TableCell>User Role</TableCell>
                            <TableCell>Actions</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map(item => (
                            <AllUsersCard key={item._id} item={item} refetch={refetch}></AllUsersCard>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AdminManageUsers;