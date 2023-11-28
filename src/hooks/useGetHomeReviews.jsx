import { useQuery } from '@tanstack/react-query';
import { getHomeReviews } from '../api/homeAPI';

const useGetFeatured = () => {
    console.log();
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["home reviews 1233321123"],
        queryFn: () =>
            getHomeReviews().then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    const reviews = data;
    const reviewsPending = isPending;
    const reviewsError = error;
    const reviewsRefetch = refetch;
    return ({ reviews, reviewsPending, reviewsError, reviewsRefetch });
};

export default useGetFeatured;