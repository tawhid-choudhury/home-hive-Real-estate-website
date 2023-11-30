
import { useQuery } from '@tanstack/react-query';
import { getAllReview } from '../api/adminDashboardApi';

const useGetAllReviews = () => {
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["reviewasdadasAll",],
        queryFn: () =>
            getAllReview().then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    return ({ isPending, error, data, refetch });
};

export default useGetAllReviews;