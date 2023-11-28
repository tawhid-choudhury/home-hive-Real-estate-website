import { Container } from '@mui/material';
import TestimonialCard from './TestimonialCard';
import { useEffect, useState } from 'react';
// import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
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
                    slidesPerView={1}
                    spaceBetween={10}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
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