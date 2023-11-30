import { Button, TableCell, TableRow } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import axiosSecure from '../../../api';
import Swal from 'sweetalert2';


const AllPropertiesTableRow = ({ item, refetch }) => {

    const { mutateAsync: handleReject } = useMutation({
        mutationFn: async () => {
            try {
                const verificationStatus = "rejected";
                const UpdatedProperty = { verificationStatus }
                // console.log(UpdatedProperty);

                const res = await axiosSecure.patch(`/verifyProperty/${item._id}`, UpdatedProperty);
                console.log(res);
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: "Property rejected",
                    icon: "success"
                });


            } catch (err) {
                console.log(err);
                Swal.fire({
                    title: "Failed!",
                    text: `${err?.message}`,
                    icon: "error"
                });
            }
        }
    })

    const { mutateAsync: handleAccept } = useMutation({
        mutationFn: async () => {
            try {
                const verificationStatus = "Verified";
                const UpdatedProperty = { verificationStatus }
                // console.log(UpdatedProperty);

                const res = await axiosSecure.patch(`/verifyProperty/${item._id}`, UpdatedProperty);
                console.log(res)
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: "Property Verified",
                    icon: "success"
                });


            } catch (err) {
                console.log(err);
                Swal.fire({
                    title: "Failed!",
                    text: `${err?.message}`,
                    icon: "error"
                });
            }
        }
    })


    return (
        <TableRow>
            <TableCell>{item?.propertyTitle}</TableCell>
            <TableCell>{item?.propertyLocation}</TableCell>
            <TableCell>{item?.agentName}</TableCell>
            <TableCell>{item?.agentEmail}</TableCell>
            <TableCell>{item?.priceRange}</TableCell>
            <TableCell>{item?.featured}</TableCell>
            <TableCell>
                {item?.verificationStatus !== "Pending" ?
                    <>
                        {item?.verificationStatus === "Verified" && <p style={{ color: "green" }}>{item?.verificationStatus}</p>}
                        {item?.verificationStatus === "rejected" && <p style={{ color: "red" }}>{item?.verificationStatus}</p>}
                    </>

                    :
                    <div>
                        <Button onClick={handleAccept} sx={{ m: 2, width: 100, bgcolor: "green" }} variant='contained'>Accept</Button>
                        <Button onClick={handleReject} sx={{ m: 2, width: 100, bgcolor: "firebrick" }} variant='contained'>Reject</Button>
                    </div>
                }
            </TableCell>
        </TableRow>
    );
};

AllPropertiesTableRow.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func
};

export default AllPropertiesTableRow;