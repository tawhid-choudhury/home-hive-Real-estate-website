import { Container } from '@mui/material';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useGetHomeReviews from '../../hooks/useGetHomeReviews'
const Testimonials = () => {
    const { reviews, reviewsPending, reviewsError } = useGetHomeReviews();

    if (reviewsPending) return 'Loading...'

    if (reviewsError) return 'An error has occurred: ' + reviewsError.message

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

                    {reviews?.map((review, idx) =>
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