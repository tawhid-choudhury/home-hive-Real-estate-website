
import { useQuery } from '@tanstack/react-query';
import { getPaymentDetails } from '../api/customerDashboardAPI';

const useGetPaymentDetailById = (orderId) => {
    // console.log(propertyId);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: [orderId],
        queryFn: () =>
            getPaymentDetails(orderId).then(
                (res) => {
                    // console.log(res);
                    return (res)
                }
            ),
    })
    // console.log(data);
    return ({ isPending, error, data, refetch });
};

export default useGetPaymentDetailById;