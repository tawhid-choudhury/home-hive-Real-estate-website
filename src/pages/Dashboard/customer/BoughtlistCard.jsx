import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import { getTime } from '../../../api/utils';
import { Link } from 'react-router-dom';


const BoughtlistCard = ({ item }) => {
    return (
        <div>
            <Box sx={{ p: 2, border: 1, mb: 4, borderRadius: 2, borderColor: "gray", display: { xs: "block", md: 'flex' }, alignItems: 'center', justifyContent: "space-between", gap: 2, }}>
                <Box sx={{ position: "relative", overflow: "hidden", maxWidth: "480px", maxHeight: "300px", bgcolor: "blanchedalmond" }}>
                    <img src={item?.propertyImage} alt="" />
                </Box>

                <Box>
                    <Typography variant='subtitle2' color="gray" >
                        <span style={{ color: "black", fontSize: '18px' }}>{item?.propertyTitle}</span>
                    </Typography>

                    <Typography sx={{ pt: 2 }} variant='subtitle1'>
                        location: {item?.propertyLocation}
                    </Typography>

                    <Typography sx={{ py: 2 }} color="text.secondary">
                        Agent: {item?.agentName}
                    </Typography>


                    <Typography variant='subtitle1'>
                        OfferedPrice: {item?.offeredAmount}
                    </Typography>

                    <Typography sx={{ mt: 4 }} variant='body2'>
                        Added on: {getTime(item?.timestamp)}
                    </Typography>
                </Box>
                <Box>
                    {item?.status === "accepted" && <Link to={`/dashboard/payment/${item._id}`}><Button sx={{ my: 2 }} variant='contained' color='primary' > Go to Payment  </Button></Link>}
                    {item?.transactionId &&
                        <Typography sx={{ mt: 4 }} variant='body2'>
                            TransactionId: {item?.transactionId}
                        </Typography>

                    }
                    <br />
                    <Typography sx={{ mt: 4, textAlign: "center", fontWeight: "700" }} variant='subtitle1'>
                        Status {item?.status}
                    </Typography>
                </Box>
            </Box>

        </div>
    );
};

BoughtlistCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func
};

export default BoughtlistCard;