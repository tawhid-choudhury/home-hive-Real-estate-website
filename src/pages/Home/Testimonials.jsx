import { Container, Grid } from '@mui/material';
import TestimonialCard from './TestimonialCard';
const Testimonials = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={2}>


                    <Grid item xs={12} md={8} lg={4}>
                        <TestimonialCard></TestimonialCard>
                    </Grid>


                </Grid>
            </Container>
        </div>
    );
};

export default Testimonials;