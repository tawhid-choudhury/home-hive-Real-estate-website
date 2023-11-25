import { Container } from '@mui/material';
import TestimonialCard from './TestimonialCard';
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const [width, setWidth] = useState(0);
    const carousel = useRef();




    //todo: remove with tenstack when database available
    useEffect(() => {
        fetch("tempReview.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [reviews])
    return (
        <div>
            <Container maxWidth="lg">
                <motion.div ref={carousel} className='carousel pb-14' whileTap={{ cursor: "grabbing" }}>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className='inner-carousel'
                    >

                        {reviews.map((review, idx) =>
                            <motion.div className='item' key={idx}>
                                <TestimonialCard review={review}></TestimonialCard>
                            </motion.div>
                        )}

                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
};

export default Testimonials;