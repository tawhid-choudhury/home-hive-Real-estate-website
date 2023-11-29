
import { useQuery } from '@tanstack/react-query';
import { getReviewForAProperty } from '../api/propertyDetailAPI';

const useGetReviewsForProperty = (propertyId) => {
    console.log(propertyId);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["reviewzxcasdzawgnmk", propertyId],
        queryFn: () =>
            getReviewForAProperty(propertyId).then(
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

export default useGetReviewsForProperty;