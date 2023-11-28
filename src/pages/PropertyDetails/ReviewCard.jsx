import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { getTimeAgo } from '../../api/utils';

const ReviewCard = ({ review }) => {



    return (
        <div>
            <Box sx={{ p: 2, border: 1, mt: 2, borderRadius: 2, borderColor: "gray", display: 'flex', alignItems: 'center', gap: 2, }}>
                <Avatar
                    alt="Remy Sharp"
                    src={review.reviewerImage}
                    sx={{ width: 44, height: 44 }}
                />
                <Box>
                    <Typography variant='subtitle2' color="gray" >
                        {review.reviewerName}
                    </Typography>

                    <Typography variant='subtitle1'>
                        {review.reviewDescription}
                    </Typography>

                    <Typography variant='body2'>
                        {getTimeAgo(review.timestamp)}
                    </Typography>
                </Box>
            </Box>
        </div >
    );
};

ReviewCard.propTypes = {
    review: PropTypes.object,
};

export default ReviewCard;