import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useGetVerified from "../../../hooks/useGetVerified";
import SelectAddCard from "./SelectAddCard";



const AdvertiseProperty = () => {
    // const { user } = useContext(AuthContext)
    const { isPending, error, data, refetch } = useGetVerified();

    const totalFeatureds = data?.reduce((total, item) => {
        if (item.featured === "true") {
            return total + 1;
        }
        return total;
    }, 0);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>

            <Typography sx={{ fontWeight: 300 }} variant='h4' color="gray">
                Advertise Properties
            </Typography>
            <Typography sx={{ mb: 4, fontWeight: 300 }} variant='h6' color="gray">
                Remaining:{6 - totalFeatureds}
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
                            <SelectAddCard key={item._id} item={item} refetch={refetch} totalFeatureds={totalFeatureds}></SelectAddCard>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AdvertiseProperty;