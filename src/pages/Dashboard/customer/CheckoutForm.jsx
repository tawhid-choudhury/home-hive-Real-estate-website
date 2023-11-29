import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axiosSecure from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';
import useGetPaymentDetailById from '../../../hooks/useGetPaymentDetailById';
import { AuthContext } from '../../../providers/AuthProvider';

const CheckoutForm = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { data } = useGetPaymentDetailById(id);
    const amount = (data.offeredAmount);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (amount > 0) {
            axiosSecure.post('/create-payment-intent', { price: amount })
                .then(res => {
                    console.log(res.data?.clientSecret);
                    setClientSecret(res.data?.clientSecret);
                })
        }

    }, [amount])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            Swal.fire({
                title: "Error!",
                text: `${error.message}`,
                icon: "error"
            });
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    transactionId: paymentIntent.id,
                    status: 'bought'
                }

                const res = await axiosSecure.patch(`/bought/${data._id}`, payment);
                console.log('payment saved', res.data);
                if (res.data?.modifiedCount) {
                    Swal.fire({
                        title: "Payment Done",
                        text: `${transactionId}`,
                        icon: "success",
                    });
                    navigate('/dashboard/bought')
                }

            }
        }


    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <Button variant='contained' color='secondary' type="submit" disabled={!stripe || !clientSecret}>
                PAY
            </Button>
        </form>
    );
};

export default CheckoutForm;