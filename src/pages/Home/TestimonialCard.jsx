import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { getTimeAgo } from "../../api/utils";



const TestimonialCard = ({ review }) => {
    return (
        <div className="w-[320px] h-[440px] p-3 mb-8">
            <Card sx={{ color: '', border: 2, borderColor: '#032e4b', height: "100%" }}>
                <CardContent sx={{ height: "100%", display: 'flex', flexDirection: "column", justifyContent: "space-between" }}>
                    <Typography variant="h1" sx={{ flexGrow: 1, fontFamily: "monospace", mb: -6 }}>“</Typography>
                    <Typography variant="body2">
                        {review.reviewDescription}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: '24px', gap: '20px' }}>
                        <Avatar
                            sx={{ width: 120, height: 120 }}
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

                    <Typography gutterBottom variant="subtitle2" component="div" color="primary"  >
                        {getTimeAgo(review.timestamp)}
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