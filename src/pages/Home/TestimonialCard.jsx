import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import PropTypes from 'prop-types';



const TestimonialCard = ({ review }) => {
    return (
        <div className="w-[320px] p-3">
            <Card sx={{ color: 'white', bgcolor: '#b79537' }}>
                <CardContent sx={{ display: 'flex', flexDirection: "column", justifyContent: "space-around", height: "full" }}>
                    <Typography variant="h1" sx={{ fontFamily: "monospace", mb: -6 }}>“</Typography>
                    <Typography variant="body2">
                        {review.reviewDescription}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: '24px', gap: '20px' }}>
                        <Avatar
                            sx={{ width: 140, height: 140 }}
                            src={review.reviewerImage}
                            alt="green iguana"
                        />
                        <Box sx={{ flexGrow: 1, }}>
                            <Typography gutterBottom variant="body2" component="div" color={'black'}  >
                                Written by
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" color={"primary"} >
                                {review.reviewerName}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography gutterBottom variant="body2" component="div" color={'black'}  >
                        Review for:
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="div" color="primary"  >
                        {review.propertyTitle}
                    </Typography>
                </CardContent>

            </Card>
        </div >
    );
};

TestimonialCard.propTypes = {
    review: PropTypes.object,
};

export default TestimonialCard;