import { Button, TableCell, TableRow } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import axiosSecure from '../../../api';
import Swal from 'sweetalert2';


const RequestCard = ({ item, refetch }) => {

    const { mutateAsync: handleReject } = useMutation({
        mutationFn: async () => {
            try {
                const status = "rejected";
                const UpdatedProperty = { status }
                // console.log(UpdatedProperty);

                const res = await axiosSecure.patch(`/rejectOffer/${item._id}`, UpdatedProperty);
                console.log(res);
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: "Offer Rejected",
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
                const status = "accepted";
                const propertyId = item.propertyId;
                const UpdatedProperty = { status, propertyId, }
                // console.log(UpdatedProperty);

                const res = await axiosSecure.patch(`/acceptOffer/${item._id}`, UpdatedProperty);
                console.log(res);
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: "Offer Accepted",
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
            <TableCell>{item?.propertyId}</TableCell>
            <TableCell>{item?.propertyTitle}</TableCell>
            <TableCell>{item?.propertyLocation}</TableCell>
            <TableCell>{item?.buyerEmail}</TableCell>
            <TableCell>{item?.buyerName}</TableCell>
            <TableCell>{item?.offeredAmount}</TableCell>
            <TableCell>
                {item?.status !== "pending" ?
                    <>
                        {item?.status === "accepted" && <p style={{ color: "green" }}>{item?.status}</p>}
                        {item?.status === "rejected" && <p style={{ color: "red" }}>{item?.status}</p>}
                        {item?.status === "bought" && <p style={{ color: "blue" }}>{item?.status}</p>}
                    </>

                    :
                    <div>
                        <Button onClick={handleAccept} sx={{ m: 2, width: 100, bgcolor: "green" }} variant='contained'>Accept</Button>
                        <br />
                        <Button onClick={handleReject} sx={{ m: 2, width: 100, bgcolor: "firebrick" }} variant='contained'>Reject</Button>
                    </div>
                }
            </TableCell>
        </TableRow>
    );
};

RequestCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func
};

export default RequestCard;