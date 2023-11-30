import { Button, TableCell, TableRow } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import axiosSecure from '../../../api';
import Swal from 'sweetalert2';


const AllUsersCard = ({ item, refetch }) => {

    const { mutateAsync: handleAdmin } = useMutation({
        mutationFn: async () => {
            try {
                const role = "admin";
                const updated = { role }
                console.log(updated);

                const res = await axiosSecure.patch(`/makeAdmin/${item._id}`, updated);
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

    const { mutateAsync: handleAgent } = useMutation({
        mutationFn: async () => {
            try {
                const role = "agent";
                const updated = { role }
                console.log(updated);

                const res = await axiosSecure.patch(`/makeAgent/${item._id}`, updated);
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

    const { mutateAsync: handleFraud } = useMutation({
        mutationFn: async () => {
            try {
                const role = "fraud";
                const email = item?.email;
                const updated = { role, email }
                // console.log(updated);

                const res = await axiosSecure.patch(`/markFraud/${item._id}`, updated);
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
            <TableCell>{item?.email}</TableCell>
            <TableCell>
                {item?.role !== "fraud" ? <>{item?.role}</> : <p style={{ color: "red" }}>{item?.role}</p>}
            </TableCell>

            <TableCell>


                <div>
                    {item?.role !== "admin" && item?.role !== "fraud" && < Button onClick={handleAdmin} sx={{ m: 2, width: 100 }} color='secondary' variant='contained'>Make Admin</Button>}
                    {item?.role === "customer" && <Button onClick={handleAgent} sx={{ m: 2, width: 100 }} color='primary' variant='contained'>Make Agent</Button>}
                    {item?.role === "agent" && <Button onClick={handleFraud} sx={{ m: 2, width: 100, bgcolor: "firebrick" }} variant='contained'>Mark As Fraud</Button>}

                </div>

            </TableCell>
        </TableRow >
    );
};

AllUsersCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func
};

export default AllUsersCard;