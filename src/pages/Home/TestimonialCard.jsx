import { Avatar, Card, CardContent, Typography } from "@mui/material";




const TestimonialCard = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography variant="h1" sx={{ fontFamily: "monospace", mb: -6 }}>“</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <Avatar
                        sx={{ width: 140, height: 140 }}
                        src="https://i.ibb.co/5xh6vZp/person2.jpg"
                        alt="green iguana"
                    />

                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>

                </CardContent>

            </Card>
        </div>
    );
};

export default TestimonialCard;