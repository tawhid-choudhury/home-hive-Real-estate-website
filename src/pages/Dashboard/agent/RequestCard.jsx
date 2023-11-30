import { Button, TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';


const RequestCard = ({ item, refetch }) => {
    return (
        <TableRow>
            <TableCell>{item?.propertyTitle}</TableCell>
            <TableCell>{item?.propertyLocation}</TableCell>
            <TableCell>{item?.buyerEmail}</TableCell>
            <TableCell>{item?.buyerName}</TableCell>
            <TableCell>{item?.offeredAmount}</TableCell>
            <TableCell>
                <Button sx={{ m: 2, width: 100, bgcolor: "green" }} variant='contained'>Accept</Button>
                <br />
                <Button sx={{ m: 2, width: 100, bgcolor: "firebrick" }} variant='contained'>Reject</Button>
            </TableCell>
        </TableRow>
    );
};

RequestCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func
};

export default RequestCard;