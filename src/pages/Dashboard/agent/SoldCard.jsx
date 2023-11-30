import { TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';


const SoldCard = ({ item, refetch }) => {

    return (
        <TableRow>
            <TableCell>{item?.propertyId}</TableCell>
            <TableCell>{item?.propertyTitle}</TableCell>
            <TableCell>{item?.propertyLocation}</TableCell>
            <TableCell>{item?.buyerEmail}</TableCell>
            <TableCell>{item?.buyerName}</TableCell>
            <TableCell>{item?.offeredAmount}</TableCell>
            <TableCell>

                <>
                    {item?.status === "accepted" && <p style={{ color: "green" }}>{item?.status}</p>}
                    {item?.status === "rejected" && <p style={{ color: "red" }}>{item?.status}</p>}
                    {item?.status === "bought" && <p style={{ color: "blue" }}>Sold</p>}
                </>

            </TableCell>
        </TableRow>
    );
};

SoldCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func
};

export default SoldCard;