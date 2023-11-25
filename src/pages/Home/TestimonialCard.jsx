import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";




const TestimonialCard = ({ review }) => {
    return (
        <div className="w-[360px] p-3">
            <Card sx={{ color: 'white', bgcolor: '#032e4b' }}>
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
                            <Typography gutterBottom variant="body2" component="div" color={'gray'}  >
                                written by
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" >
                                {review.reviewerName}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography gutterBottom variant="body1" component="div" color={'gray'}  >
                        Review for:
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color='secondary'  >
                        {review.propertyTitle}
                    </Typography>
                </CardContent>

            </Card>
        </div >
    );
};

export default TestimonialCard;