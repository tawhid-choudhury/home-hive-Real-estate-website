import { Button, TableCell, TableRow } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import axiosSecure from '../../../api';
import Swal from 'sweetalert2';


const SelectAddCard = ({ item, refetch, totalFeatureds }) => {

    const { mutateAsync: modifyAd } = useMutation({
        mutationFn: async (ft) => {
            if (totalFeatureds >= 6) {
                Swal.fire({
                    title: "Error!",
                    text: `All slots full`,
                    icon: "error"
                });
                return;
            }
            try {
                const featured = ft;
                const updatedProperty = { featured }
                // console.log(UpdatedProperty);

                const res = await axiosSecure.patch(`/editAds/${item._id}`, updatedProperty);
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

    const { mutateAsync: modifyAdremove } = useMutation({
        mutationFn: async (ft) => {
            // if (totalFeatureds >= 6) {
            //     Swal.fire({
            //         title: "Error!",
            //         text: `All slots full`,
            //         icon: "error"
            //     });
            //     return;
            // }
            try {
                const featured = ft;
                const updatedProperty = { featured }
                // console.log(UpdatedProperty);

                const res = await axiosSecure.patch(`/editAds/${item._id}`, updatedProperty);
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




    return (
        <TableRow>
            <TableCell>{item?.propertyTitle}</TableCell>
            <TableCell>{item?.propertyLocation}</TableCell>
            <TableCell>{item?.agentName}</TableCell>
            <TableCell>{item?.agentEmail}</TableCell>
            <TableCell>{item?.priceRange}</TableCell>
            <TableCell>{item?.featured}</TableCell>
            <TableCell>
                {item?.featured === "true" ?
                    <>
                        <Button onClick={() => modifyAdremove("false")} sx={{ m: 2, width: 100, bgcolor: "firebrick" }} variant='contained'>Remove</Button>
                    </>

                    :
                    <div>
                        <Button onClick={() => modifyAd("true")} sx={{ m: 2, width: 100, bgcolor: "green" }} variant='contained'>Advertise</Button>
                    </div>
                }
            </TableCell>
        </TableRow>
    );
};

SelectAddCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func,
    totalFeatureds: PropTypes.number
};

export default SelectAddCard;