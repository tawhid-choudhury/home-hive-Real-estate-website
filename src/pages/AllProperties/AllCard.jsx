import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

const AllCard = ({ property }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}>
            <Card elevation={0} sx={{ maxWidth: "full", position: "relative" }}>
                <CardMedia
                    sx={{ height: 240 }}
                    image={property.propertyImage}
                    title="green iguana"
                />

                <CardContent sx={{ width: '100%', display: "flex", flexDirection: 'column-reverse', background: '#032e4b' }}>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box>
                            <Typography
                                sx={{ display: "flex", alignItems: 'center' }} color='white' variant="h6" component="div"
                            >
                                {property.propertyTitle}
                                {property.verificationStatus === 'Verified' &&
                                    <span
                                        style={{ color: '#39FF14', padding: '2px', fontSize: 'small', display: "flex", alignItems: 'center' }}>
                                        <TaskAltOutlinedIcon fontSize='small' />
                                        verified
                                    </span>}
                            </Typography>
                            <Typography variant="subtitle1" color="secondary" sx={{ display: "flex", alignItems: 'center', fontWeight: 600 }}>
                                <PlaceOutlinedIcon fontSize='medium' /> &nbsp; {property.propertyLocation}
                            </Typography>
                            <Typography variant="subtitle1" color="secondary" sx={{ display: "flex", alignItems: 'center', fontWeight: 600 }}>
                                <MonetizationOnOutlinedIcon fontSize='medium' /> &nbsp; {property.priceRange}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: 2 }}>


                                <Avatar
                                    sx={{ bgcolor: red[500], width: 40, height: 40 }}
                                    src={property?.agentImage}
                                />


                                <Box>
                                    <Typography sx={{}} color="gray">
                                        Added by
                                    </Typography>
                                    <Typography variant="subtitle1" color="secondary" sx={{ display: "flex", alignItems: 'center', fontWeight: 600 }}>
                                        {property?.agentName}
                                    </Typography>
                                    <Typography variant="subtitle1" color="secondary" sx={{ display: "flex", alignItems: 'center', fontWeight: 600 }}>
                                        {property?.agentEmail}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <CardActions>
                            <Link to={`/propertydetails/${property._id}`}><Button color='secondary' size="large" variant='outlined' sx={{ fontWeight: 600 }}>Details</Button></Link>
                        </CardActions>
                    </Box>


                </CardContent>

            </Card>
        </motion.div>
    );
};


AllCard.propTypes = {
    property: PropTypes.object
};

export default AllCard;