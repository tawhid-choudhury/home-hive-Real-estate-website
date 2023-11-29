
import { useQuery } from '@tanstack/react-query';
import { getReviewfromUser } from '../api/customerDashboardAPI';

const useGetReviewFromUser = (email) => {
    console.log(email);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["reviewasdadas", email],
        queryFn: () =>
            getReviewfromUser(email).then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    const reviews = data;
    const reviewpending = isPending;
    const reviewerror = error;
    const reviewRefetch = refetch;
    return ({ reviewpending, reviewerror, reviews, reviewRefetch });
};

export default useGetReviewFromUser;