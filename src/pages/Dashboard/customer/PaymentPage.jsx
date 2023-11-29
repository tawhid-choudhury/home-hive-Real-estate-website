import { useParams } from 'react-router-dom';
import useGetPaymentDetailById from '../../../hooks/useGetPaymentDetailById';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { Container } from '@mui/material';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const PaymentPage = () => {
    const { id } = useParams();
    const { isPending, error, data } = useGetPaymentDetailById(id);
    console.log(data);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>

            <div>
                <Container maxWidth="md">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </Container>
            </div>
        </div>
    );
};

export default PaymentPage;