import { Container } from '@mui/material';
import TestimonialCard from './TestimonialCard';
import { useEffect, useState } from 'react';
// import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { getHomeReviews } from '../../api/homeAPI';
const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    //todo: remove with tenstack when database available
    useEffect(() => {
        getHomeReviews()
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <Container maxWidth="lg">


                <Swiper
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >

                    {reviews.map((review, idx) =>
                        <SwiperSlide key={idx}>
                            <TestimonialCard review={review}></TestimonialCard>
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </div>
    );
};

export default Testimonials;